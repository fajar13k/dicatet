import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChangeEventHandler = (event) => {
    setTitle(event.target.value);
  }

  const onBodyChangeEventHandler = (event) => {
    console.log(event);
    setBody(event.target.value);
  }

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
        <input type="text" id="title" className="bg-slate-700 font-semibold text-lg rounded-md block w-full p-2.5 focus:outline focus:outline-pink-600" placeholder="(Untitled)" value={title} onChange={onTitleChangeEventHandler} />
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block mb-2 text-md font-medium">Details</label>
        <textarea
          className="bg-slate-700 text-md rounded-md block w-full p-2.5 focus:outline focus:outline-pink-600"
          id="body"
          rows={10}
          value={body}
          onChange={onBodyChangeEventHandler}
        />
      </div>
      <button type="submit" className="bg-gradient-to-r bg-pink-600 hover:bg-pink-700 px-4 py-2 font-bold rounded-md focus:outline focus:outline-pink-400">Add Note</button>
    </form>
  )
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
}
