import React from 'react';
import PropTypes from 'prop-types';

export default function DeleteButton({ id, deleteNote }) {
  return (
    <button className="bg-slate-200 text-slate-900 rounded-md py-2 px-4" onClick={() => deleteNote(id)}>Delete</button>
  )
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired
}