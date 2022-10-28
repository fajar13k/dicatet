import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ArchiveButton from "./Button/ArchiveButton";
import DeleteButton from "./Button/DeleteButton";
import UnarchiveButton from "./Button/UnarchiveButton";
import { unarchiveNote, archiveNote, deleteNote } from "../utils/network-data";

export default function NoteAction({ id, noteStatus }) {
  const navigate = useNavigate();

  const onUnarchiveNote = async (selectedNote) => {
    await unarchiveNote(selectedNote);
    navigate("/");
  };

  const onArchiveNote = async (selectedNote) => {
    await archiveNote(selectedNote);
    navigate("/");
  };

  const onDeleteNote = async (selectedNote) => {
    await deleteNote(selectedNote);
    navigate("/");
  };

  return (
    <div className="fixed flex bottom-8 gap-4 font-bold">
      {noteStatus ? (
        <UnarchiveButton id={id} unarchiveNote={onUnarchiveNote} />
      ) : (
        <ArchiveButton id={id} archiveNote={onArchiveNote} />
      )}
      <DeleteButton id={id} deleteNote={onDeleteNote} />
    </div>
  );
}

NoteAction.propTypes = {
  id: PropTypes.string.isRequired,
  noteStatus: PropTypes.bool.isRequired,
};
