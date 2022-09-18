import React from 'react';
import NoteItem from './NoteItem/NoteItem';
import PropTypes from 'prop-types';

export default function NoteList({ notes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {notes.map((note) => (
        <NoteItem 
          body={note.body}
          createdAt={note.createdAt}
          id={note.id}
          key={note.id}
          title={note.title}
        />
      ))}
    </div>
  )
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
}