import React from 'react';
import NoteItemBody from './NoteItemBody';
import NoteItemHeader from './NoteItemHeader';
import PropTypes from 'prop-types';

export default function NoteItem({ body, createdAt, id, title }) {
  return (
    <article
      className="p-6 text-slate-700 dark:text-neutral-50 bg-neutral-50 dark:bg-slate-700 rounded-xl shadow-xl"
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