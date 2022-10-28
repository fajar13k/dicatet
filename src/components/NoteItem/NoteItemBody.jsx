import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

export default function NoteItemBody({ body }) {
  return (
    <p className="mt-4">{ ReactHtmlParser(body) }</p>
  )
}

NoteItemBody.propTypes = {
  body: PropTypes.string
}