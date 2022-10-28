import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../contexts/LanguageContext/LanguageContextWrapper';


export default function UnarchiveButton({ id, unarchiveNote }) {
  return (
    <button className="bg-slate-200 text-slate-900 rounded-md py-2 px-4" onClick={() => unarchiveNote(id)}><Text tid="unarchive" /></button>
  )
}

UnarchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  unarchiveNote: PropTypes.func.isRequired
}
