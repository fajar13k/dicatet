import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../contexts/LanguageContext/LanguageContextWrapper';

export default function ArchiveButton({ id, archiveNote }) {
  return (
    <button className="bg-slate-200 text-slate-900 rounded-md py-2 px-4" onClick={() => archiveNote(id)}><Text tid="archive" /></button>
  )
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archiveNote: PropTypes.func.isRequired
}
