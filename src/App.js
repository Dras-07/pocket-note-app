import React, { useState } from 'react';
import  './App.css';
import GroupList from './GroupList';
import NotesList from './NoteList';
import AddGroupBox from './AddGroupBox';

function App() {
  const [groups, setGroups] = useState({});
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showAddGroupBox, setShowAddGroupBox] = useState(false);
  const [selectedLabelColor, setSelectedLabelColor] = useState({});

  const addGroup = (groupName, labelColor) => {
    const updatedGroups = {
      ...groups,
      [groupName]: [],
    };
    const updatedColors = {
      ...selectedLabelColor,
      [groupName]: labelColor,
    };
    setGroups(updatedGroups);
    setSelectedLabelColor(updatedColors);
    setSelectedGroup(groupName);
  };

  const setNotes = (groupName, notes) => {
    setGroups({
      ...groups,
      [groupName]: notes,
    });
  };

  return (
    <div className="app">
      <div className="left-side">
        <div className="top">
          <h1 className="left-side-heading">Pocket Notes</h1>
          <button
            className="add-group-btn"
            onClick={() => {
              setShowAddGroupBox(true);
            }}
          >
            + Create Notes Group
          </button>
        </div>
        <GroupList
          groups={Object.keys(groups)}
          setSelectedGroup={setSelectedGroup}
          groupColors={selectedLabelColor} 
        />
      </div>
      <div className="right-side">
        {selectedGroup ? (
          <NotesList
            selectedGroup={selectedGroup}
            groups={groups}
            setNotes={setNotes}
            groupColors={selectedLabelColor} 
          />
        ) : (
          <h2>Pocket Notes</h2>
        )}
      </div>
      {showAddGroupBox && (
        <AddGroupBox
          addGroup={addGroup}
          onClose={() => setShowAddGroupBox(false)}
          setSelectedLabelColor={setSelectedLabelColor}
        />
      )}
    </div>
  );
}

export default App;
