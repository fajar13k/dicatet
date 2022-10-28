import React from 'react';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';

export default function AddPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = async (note) => {
    await addNote(note);
    navigate('/');
  }
  
  return (
    <section>
      <h2 className="text-4xl font-bold mb-8 text-slate-700 dark:text-neutral-50">Add new Note</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
