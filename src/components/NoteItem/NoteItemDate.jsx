import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils';

export default function NoteItemDate({ createdAt }) {
  return (
    <span className="text-sm text-slate-700 dark:text-neutral-50">
      {showFormattedDate(createdAt)}
    </span>
  )
}

NoteItemDate.propTypes = {
  createdAt: PropTypes.string.isRequired,
}