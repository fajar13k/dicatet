import React from 'react';
import NoteItemBody from './NoteItemBody';
import NoteItemHeader from './NoteItemHeader';
import PropTypes from 'prop-types';

export default function NoteItem({ body, createdAt, id, title }) {
  return (
    <article
      className="p-6 bg-slate-700 rounded-xl shadow-xl"
      key={id}
    >
      <NoteItemHeader createdAt={createdAt} id={id} title={title} />
      <NoteItemBody body={body} />
    </article>
  )
}

NoteItem.propTypes = {
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}