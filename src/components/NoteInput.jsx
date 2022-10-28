import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { Text } from '../contexts/LanguageContext/LanguageContextWrapper';

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
        <label htmlFor="title" className="block mb-2 text-md font-medium text-slate-700 dark:text-neutral-50"><Text tid="title" /></label>
        <input type="text" id="title" className="bg-neutral-200 dark:bg-slate-700 text-slate-700 dark:text-neutral-50 font-semibold text-lg rounded-md block w-full p-2.5 focus:outline focus:outline-pink-300" value={title} onChange={handleTitleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block mb-2 text-md font-medium text-slate-700 dark:text-neutral-50"><Text tid="details" /></label>
        <textarea
          className="bg-neutral-200 dark:bg-slate-700 text-slate-700 dark:text-neutral-50 text-md rounded-md block w-full p-2.5 focus:outline focus:outline-pink-300"
          id="body"
          rows={10}
          value={body}
          onChange={handleBodyChange}
        />
      </div>
      <button type="submit" className="text-neutral-50 bg-pink-600 hover:opacity-80 px-4 py-2 font-bold rounded-md focus:outline focus:outline-pink-400"><Text tid="add_note" /></button>
    </form>
  )
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
}
