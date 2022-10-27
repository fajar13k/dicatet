import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function NoteInput({ addNote }) {
  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({
      title,
      body
    })
  }

  return (
    <form className="appearance-none" onSubmit={onSubmitEventHandler}>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 text-md font-medium">Title</label>
        <input type="text" id="title" className="bg-slate-700 font-semibold text-lg rounded-md block w-full p-2.5 focus:outline focus:outline-pink-600" placeholder="(Untitled)" value={title} onChange={handleTitleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block mb-2 text-md font-medium">Details</label>
        <textarea
          className="bg-slate-700 text-md rounded-md block w-full p-2.5 focus:outline focus:outline-pink-600"
          id="body"
          rows={10}
          value={body}
          onChange={handleBodyChange}
        />
      </div>
      <button type="submit" className="bg-gradient-to-r bg-pink-600 hover:bg-pink-700 px-4 py-2 font-bold rounded-md focus:outline focus:outline-pink-400">Add Note</button>
    </form>
  )
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
}
