import React from 'react';
import { useNavigate } from 'react-router-dom';
import { archiveNote, deleteNote, unarchiveNote } from '../utils/local-data';
import ArchiveButton from './Button/ArchiveButton';
import DeleteButton from './Button/DeleteButton';
import UnarchiveButton from './Button/UnarchiveButton';

export default function NoteAction({ id, noteStatus }) {
  const navigate = useNavigate();
  
  const onUnarchiveNote = (selectedNote) => {
    unarchiveNote(selectedNote);
    navigate('/');
  }

  const onArchiveNote = (selectedNote) => {
    archiveNote(selectedNote);
    navigate('/');
  }

  const onDeleteNote = (selectedNote) => {
    deleteNote(selectedNote);
    navigate('/');
  }
  
  return (
    <div className="fixed flex bottom-8 gap-4 font-bold">
      {noteStatus ? (
        <UnarchiveButton id={id} unarchiveNote={onUnarchiveNote} />
      ) : (
        <ArchiveButton id={id} archiveNote={onArchiveNote} />
      )}
      <DeleteButton id={id} deleteNote={onDeleteNote} />
    </div>
  )
}