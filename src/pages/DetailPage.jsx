import React, { useState } from 'react';
import { getNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const { id } = useParams();
  const [note, setNotes] = useState(getNote(id));

  return (
    <NoteDetail note={note} />
  )
}