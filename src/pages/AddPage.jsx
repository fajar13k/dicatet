import React from 'react';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';

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
