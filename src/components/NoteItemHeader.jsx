import React from 'react';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

export default function NoteItemHeader({ createdAt, title })  {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="text-sm">
        {showFormattedDate(createdAt)}
      </span>
    </div>
  )
}

NoteItemHeader.propTypes = {
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}