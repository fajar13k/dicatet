import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

export default function NoteItemBody({ body }) {
  return (
    <p className="mt-4">{parser(body)}</p>
  )
}

NoteItemBody.propTypes = {
  body: PropTypes.string.isRequired
}