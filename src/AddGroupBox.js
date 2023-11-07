import React, { useState } from 'react';
import './AddGroupBox.css';

function AddGroupBox({ addGroup, onClose, setSelectedLabelColor }) {
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#B38BFA');

  const handleCreateGroup = () => {
    if (newGroupName.trim() !== '') {
      addGroup(newGroupName, selectedColor);
      setNewGroupName('');
      onClose();

      const updatedGroups = JSON.parse(localStorage.getItem('groups')) || {};
      updatedGroups[newGroupName] = [];
      localStorage.setItem('groups', JSON.stringify(updatedGroups));
    }
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="add-group-box">
      <h1>Create New Notes Group</h1>
      <div className="input-line">
        <span>Group Name:</span>
        <input
          type="text"
          placeholder="Enter group name"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
        />
      </div>
      <div className="color-option-container">
        <span>Choose Color:</span>
        <div className="color-options">
          <div className="color-option" style={{ backgroundColor: '#B38BFA' }} onClick={() => handleColorSelection('#B38BFA')}></div>
          <div className="color-option" style={{ backgroundColor: '#FF79F2' }} onClick={() => handleColorSelection('#FF79F2')}></div>
          <div className="color-option" style={{ backgroundColor: '#43E6FC' }} onClick={() => handleColorSelection('#43E6FC')}></div>
          <div className="color-option" style={{ backgroundColor: '#F19576' }} onClick={() => handleColorSelection('#F19576')}></div>
          <div className="color-option" style={{ backgroundColor: '#0047FF' }} onClick={() => handleColorSelection('#0047FF')}></div>
        </div>
      </div>
      <button onClick={handleCreateGroup} className="create-button">
        Create
      </button>
    </div>
  );
}

export default AddGroupBox;
