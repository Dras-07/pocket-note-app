import React, { useState } from 'react';
import styles from './NoteList.module.css';
import AddNoteButton from './AddButton';

function NotesList({ selectedGroup, groups, setNotes, groupColors }) {
  const notesForSelectedGroup = groups[selectedGroup] || [];
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const formattedNote = `${currentTime} % ${newNote} % ${currentDate}`;
      setNotes(selectedGroup, [...notesForSelectedGroup, formattedNote]);
      setNewNote('');
    }
  };

  const groupLabelColor = groupColors[selectedGroup] || 'black';

  const labelStyle = {
    backgroundColor: groupLabelColor,
    borderRadius: '50%',
    width: '34px',
    height: '34px',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '24px',
    marginRight: '10px', 
    color: 'white', 
  };

  return (
    <div className={styles['notes-list']}>
      <div className={styles['top-section']}>
        <div className={styles['label']}>
        <div className={styles['label']}>
  <span style={{ backgroundColor: groupLabelColor }} className={styles['circle-label']}>
    {selectedGroup.substring(0, 2).toUpperCase()}
  </span>
</div>
        </div>
        <div className={styles['group-name']}>{selectedGroup}</div>
      </div>

      <ul className={styles['list']}>
  {notesForSelectedGroup.map((note, index) => {
    const parts = note.split('%');

    const currentTime = parts[0].trim();
    const currentNote = parts[1].trim();
    const currentDate = parts[2].trim();

    return (
      <li key={index}>
      <div className={styles['note']}>
        <div className={`${styles['date-container']}`}>
          <div className={styles['time']}>{currentTime}</div>
          <div className={styles['date']}>{currentDate}</div>
        </div>
         <div className={`${styles['note-container']}`}>
          {currentNote}
        </div>
        </div>
      </li>
    );
  })}
</ul>

      <div className={styles['notes-input']}>
      <div className={styles['notes-input-wall']}>
        <textarea
          className={styles['notes-text']}
          placeholder="Add a new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <div className={styles['add-note-button-container']}>
          <AddNoteButton onClick={handleAddNote} className={styles['add-note-button']} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default NotesList;
