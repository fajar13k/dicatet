import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/_404";
import LoginPage from "./pages/LoginPage";
import { getAccessToken, getUserLogged, putAccessToken, removeAccessToken } from "./utils/network-data";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    async function getUserLoggedData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setIsLoading(false);
    }

    getUserLoggedData();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = async () => {
    setAuthedUser(null);
    removeAccessToken();
    navigate('/login');
  }

  return (
    <>
      {isLoading ? (
        <section className="flex justify-center items-center h-screen">
          <h1 className="font-bold text-4xl">I'm Loading ...</h1>
        </section>
      ) : authedUser !== null ? (
        <div className="max-w-6-xl">
          <header className="flex justify-between items-center px-4 lg:px-32 py-4 bg-gradient-to-r from-pink-400 to-pink-600">
            <Link to="/">
              <h1 className="font-bold text-4xl hover:underline hover:underline-offset-8">
                Dicatet
              </h1>
            </Link>
            <h2 className="text-xl">Hi, <span className="font-bold">{authedUser.name}!</span></h2>
            <Navigation logout={onLogout} />
          </header>
          <main className="px-4 lg:px-32 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/note/:id" element={<DetailPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
      ) : (
        <div className="max-w-6-xl">
          <header className="flex justify-between items-center px-4 lg:px-32 py-4 bg-gradient-to-r from-pink-400 to-pink-600">
            <Link to="/">
              <h1 className="font-bold text-4xl hover:underline hover:underline-offset-8">
                Dicatet
              </h1>
            </Link>
            <Navigation />
          </header>
          <main className="px-4 lg:px-32 py-8">
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
