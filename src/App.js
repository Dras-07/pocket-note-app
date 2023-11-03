import React, { useState } from 'react';
import './App.css';
import GroupList from './GroupList';
import NotesList from './NoteList'; 
import AddGroupBox from './AddGroupBox';

function App() {
  const [groups, setGroups] = useState({});
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showAddGroupBox, setShowAddGroupBox] = useState(false);

  
  const addGroup = (groupName) => {
    setGroups({
      ...groups,
      [groupName]: [], 
    });
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
          <h1>Pocket Notes</h1>
          <button onClick={() => setShowAddGroupBox(true)}>Add new Group</button>
        </div>
        <GroupList
          groups={Object.keys(groups)}
          setSelectedGroup={setSelectedGroup}
        />
      </div>
      <div className="right-side">
        {selectedGroup ? (
          <NotesList
            selectedGroup={selectedGroup}
            groups={groups}
            setNotes={setNotes}
          />
        ) : (
          <h2>Pocket Notes</h2>
        )}
      </div>
      {showAddGroupBox && (
        <AddGroupBox
          addGroup={addGroup}
          onClose={() => setShowAddGroupBox(false)} 
        />
      )}
    </div>
  );
}

export default App;

