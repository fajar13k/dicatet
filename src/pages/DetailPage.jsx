import React, { useState } from "react";
import NoteDetail from "../components/NoteDetail";
import PageNotFound from "../pages/_404";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import { useEffect } from "react";

export default function DetailPage() {
  const { id } = useParams();
  const [note, setNotes] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getNote(id).then((fetchedNote) => {
        setNotes(fetchedNote);
        setIsLoading(false);
      });
    }
  }, [id]);

  return (
    <>{note === undefined ? <PageNotFound /> : isLoading ? <span>Loading ...</span> : <NoteDetail note={note.data} />}</>
  );
}
