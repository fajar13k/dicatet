import React from 'react';
import PropTypes from 'prop-types';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';

export default function NoteDetail({ note }) {
  return (
    <>
      <h2 className="text-5xl font-semibold mb-2">{note.title}</h2>
      <NoteItemDate createdAt={note.createdAt} />
      <NoteItemBody body={note.body} />
    </>
  )
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
}