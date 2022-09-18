import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils';

export default function NoteItemDate({ createdAt }) {
  return (
    <span className="text-sm">
      {showFormattedDate(createdAt)}
    </span>
  )
}

NoteItemDate.propTypes = {
  createdAt: PropTypes.string.isRequired
}