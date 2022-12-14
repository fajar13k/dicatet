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
import { Text } from "./contexts/LanguageContext/LanguageContextWrapper";

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

    if (getAccessToken() !== null) {
      getUserLoggedData();
    } else {
      setIsLoading(false);
    }
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
        <section className="bg-neutral-100 dark:bg-slate-700 flex justify-center items-center h-full">
          <h1 className="text-slate-700 dark:text-neutral-50 font-bold text-4xl"><Text tid="loading" /></h1>
        </section>
      ) : authedUser !== null ? (
        <div className="max-w-6-xl bg-neutral-100 dark:bg-gray-800 h-full">
          <header className="flex justify-between items-center px-4 lg:px-32 py-4 bg-gradient-to-r from-pink-400 to-pink-600">
            <Link to="/">
              <h1 className="font-bold text-4xl hover:underline hover:underline-offset-8 text-neutral-50">
                Dicatet
              </h1>
            </Link>
            <h2 className="text-xl text-neutral-50"><Text tid="hi" />, <span className="font-bold">{authedUser.name}!</span></h2>
            <Navigation logout={onLogout} />
          </header>
          <main className="px-4 lg:px-32 py-8 h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/note/:id" element={<DetailPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
      ) : (
        <div className="max-w-6-xl bg-neutral-100 dark:bg-gray-800 h-full">
          <header className="flex justify-between items-center px-4 lg:px-32 py-4 bg-gradient-to-r from-pink-400 to-pink-600">
            <Link to="/">
              <h1 className="font-bold text-4xl hover:underline hover:underline-offset-8 text-neutral-50">
                Dicatet
              </h1>
            </Link>
            <Navigation />
          </header>
          <main className="px-4 lg:px-32 py-8 h-screen">
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
