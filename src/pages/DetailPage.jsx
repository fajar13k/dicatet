import React, { useState } from "react";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import PageNotFound from "./pages/_404";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [note, setNotes] = useState(getNote(id));

  return (
    <>{note === undefined ? <PageNotFound /> : <NoteDetail note={note} />}</>
  );
}
