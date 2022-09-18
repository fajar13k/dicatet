import React from 'react';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

export default function AddPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate('/');
  }
  
  return (
    <section>
      <h2 className="text-4xl font-bold mb-8">Add new Note</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
