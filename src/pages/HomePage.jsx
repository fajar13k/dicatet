import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, getArchivedNotes } from "../utils/network-data";

function HomePage() {
  const [activeNotes, setActiveNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  };

  const fetchAllActiveNotes = async () => {
    const response = await getActiveNotes();
    setActiveNotes(response.data);
  };

  const fetchAllArchivedNotes = async () => {
    const response = await getArchivedNotes();
    setArchivedNotes(response.data);
  };

  const searchedNotes = (params) => {
    return params.length > 0
      ? params
          .filter((note) =>
            note.title.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((item) => {
            item = { ...item };
            return item;
          })
      : [];
  };

  useEffect(() => {
    fetchAllActiveNotes();
    fetchAllArchivedNotes();
  }, []);

  return (
    <section>
      <SearchBar
        keyword={keyword}
        setKeyword={(value) => {
          setKeyword(value);
          changeSearchParams(value);
        }}
      />
      <h2 className="font-semibold text-xl my-4 text-slate-700 dark:text-neutral-50">
        Active Notes ({`${activeNotes.length}`})
      </h2>
      {searchedNotes(activeNotes).length > 0 ? (
        <NoteList notes={searchedNotes(activeNotes)} />
      ) : (
        <p className="text-slate-700 dark:text-neutral-50">No active notes!</p>
      )}
      <h2 className="font-semibold text-xl my-4 text-slate-700 dark:text-neutral-50">
        Archived Notes ({`${archivedNotes.length}`})
      </h2>
      {searchedNotes(archivedNotes).length > 0 ? (
        <NoteList notes={searchedNotes(archivedNotes)} />
      ) : (
        <p className="text-slate-700 dark:text-neutral-50">No archived notes!</p>
      )}
    </section>
  );
}

export default HomePage;
