import React, { useState } from "react";
import NoteList from "../components/NoteList";
import { getActiveNotes, getArchivedNotes } from "../utils/local-data";

function HomePage() {
  const [activeNotes, setActiveNotes] = useState(getActiveNotes());
  const [archivedNotes, setArchivedNotes] = useState(getArchivedNotes());

  return (
    <section>
      <h2 className="font-semibold text-xl mb-4">Active Notes</h2>
      <NoteList notes={activeNotes} />
      <h2 className="font-semibold text-xl my-4">Archived Notes</h2>
      <NoteList notes={archivedNotes} />
    </section>
  );
}

export default HomePage;
