// AddGroupBox.js
import React, { useState } from 'react';

function AddGroupBox({ addGroup, onClose }) {
  const [newGroupName, setNewGroupName] = useState('');

  const handleAddGroup = () => {
    if (newGroupName.trim() !== '') {
      addGroup(newGroupName); 
      onClose(); 
    }
  };

  return (
    <div className="add-group-box">
      <input
        type="text"
        placeholder="Group Name"
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
      />
      <button onClick={handleAddGroup}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default AddGroupBox;
