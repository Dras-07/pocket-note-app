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

      const formattedNote = `${currentTime}  ${newNote}\n${currentDate}`;
      setNotes(selectedGroup, [...notesForSelectedGroup, formattedNote]);
      setNewNote('');
    }
  };

  // Get the label color for the selected group, defaulting to black
  const groupLabelColor = groupColors[selectedGroup] || 'black';

  // Create a style object for the circle label with background color
  const labelStyle = {
    backgroundColor: groupLabelColor,
    borderRadius: '50%',
    width: '34px',
    height: '34px',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '24px',
    marginRight: '10px', // Adjust the spacing as needed
    color: 'white', // Text color
  };

  return (
    <div className={styles['notes-list']}>
      <h2 className={styles['notes-group-name']}>
        <span style={labelStyle}>
          {selectedGroup.substring(0, 2).toUpperCase()}
        </span>
        {selectedGroup}
      </h2>
      <ul>
        {notesForSelectedGroup.map((note, index) => {
          const currentTime = note.split('\n')[0];
          const currentDate = note.split('\n')[1];
          const noteContent = note.split('\n').slice(2).join('\n');

          return (
            <li key={index}>
            <div className={styles['notes-main-div']}>
              <div className={styles['left-div']}>
                <div className={styles['time']}>{currentTime}</div>
                <div className={styles['date']}>{currentDate}</div>
              </div>
              <div className={styles['right-div']}>
                {noteContent}
              </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles['notes-input']}>
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
  );
}

export default NotesList;
