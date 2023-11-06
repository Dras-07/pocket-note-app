import React from 'react';

const AddNoteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="custom-add-note-button">
    <svg width="35" height="29" xmlns="http://www.w3.org/2000/svg" fill="none">
  <rect width="35" height="29" fill="white" />
  <path
    d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
    fill="#ABABAB"
  />
</svg>

    </button>
  );
};

export default AddNoteButton;
