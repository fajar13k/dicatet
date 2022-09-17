import React, { useState } from "react";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";

function HomePage() {
  const [notes, setNotes] = useState(getAllNotes());

  return (
    <section>
      <h2 className="font-semibold text-xl mb-4">Active Notes</h2>
      <NoteList notes={notes} />
    </section>
  );
}

export default HomePage;
