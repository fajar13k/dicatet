import React from 'react';
import PropTypes from 'prop-types';
import NoteItemDate from './NoteItem/NoteItemDate';
import NoteItemBody from './NoteItem/NoteItemBody';
import NoteAction from './NoteAction';

export default function NoteDetail({ note }) {
  
  return (
    <>
      <h2 className="text-7xl font-semibold mb-2">{note.title}</h2>
      <NoteItemDate createdAt={note.createdAt} />
      <NoteItemBody body={note.body} />
      <NoteAction id={note.id} noteStatus={note.archived} />
    </>
  )
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
}