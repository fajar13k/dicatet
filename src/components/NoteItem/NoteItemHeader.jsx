import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoteItemDate from './NoteItemDate';

export default function NoteItemHeader({ createdAt, id, title })  {
  return (
    <div>
      <Link to={`/note/${id}`}><h3 className="text-2xl font-semibold underline underline-offset-4 decoration-pink-400">{title}</h3></Link>
      <NoteItemDate createdAt={createdAt} />
    </div>
  )
}

NoteItemHeader.propTypes = {
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}