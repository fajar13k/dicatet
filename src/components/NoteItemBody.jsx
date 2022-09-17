import React from 'react';
import PropTypes from 'prop-types';

export default function NoteItemBody({ body }) {
  return (
    <p>{body}</p>
  )
}

NoteItemBody.propTypes = {
  body: PropTypes.string.isRequired
}