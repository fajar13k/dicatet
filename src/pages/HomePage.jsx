import React, { useState } from "react";
import NoteList from "../components/NoteList";
import { getActiveNotes, getArchivedNotes } from "../utils/local-data";

function HomePage() {
  const [activeNotes, setActiveNotes] = useState(getActiveNotes());
  const [archivedNotes, setArchivedNotes] = useState(getArchivedNotes());

  return (
    <section>
      <h2 className="font-semibold text-xl mb-4">Active Notes ({`${activeNotes.length}`})</h2>
      {activeNotes.length > 0 ? (<NoteList notes={activeNotes} />) : (<p>No active notes!</p>)}
      <h2 className="font-semibold text-xl my-4">Archived Notes ({`${archivedNotes.length}`})</h2>
      {archivedNotes.length > 0 ? (<NoteList notes={archivedNotes} />) : (<p>No archived notes!</p>)}
    </section>
  );
}

export default HomePage;
