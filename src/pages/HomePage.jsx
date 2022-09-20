import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getAllNotes } from "../utils/local-data";

function HomePage() {
  const [notes, setNotes] = useState(getAllNotes());
  const [searchedNotes, setSearchedNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('keyword');
  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  }

  const activeNotes = (searchedNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchedNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchedNotes(notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase())));
    changeSearchParams(keyword);
  }, [keyword, notes]);

  return (
    <section >
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <h2 className="font-semibold text-xl my-4">
        Active Notes ({`${activeNotes.length}`})
      </h2>
      {activeNotes.length > 0 ? (
        <NoteList notes={activeNotes} />
      ) : (
        <p>No active notes!</p>
      )}
      <h2 className="font-semibold text-xl my-4">
        Archived Notes ({`${archivedNotes.length}`})
      </h2>
      {archivedNotes.length > 0 ? (
        <NoteList notes={archivedNotes} />
      ) : (
        <p>No archived notes!</p>
      )}
    </section>
  );
}

export default HomePage;
