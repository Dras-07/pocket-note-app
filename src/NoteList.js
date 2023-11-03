import React, { useState } from 'react';
import styles from './NoteList.module.css'; 

import AddNoteButton from './AddButton'; 

function NotesList({ selectedGroup, groups, setNotes }) {
  const notesForSelectedGroup = groups[selectedGroup] || [];
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes(selectedGroup, [...notesForSelectedGroup, newNote]);
      setNewNote('');
    }
  };

  return (
    <div className={styles['notes-list']}>
      <h2 className={styles['notes-group-name']}>{selectedGroup}</h2>
      <ul>
        {notesForSelectedGroup.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>

      <div className={styles['notes-input']}>
        <textarea
          placeholder="Add a new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <div className={styles['add-note-button-container']}>
          <AddNoteButton onClick={handleAddNote} className={styles['add-note-button']} />
        </div>
      </div>
    </div>
  );
}

export default NotesList;
