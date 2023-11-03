import React from 'react';

function GroupList({ groups, setSelectedGroup }) {
  return (
    <div className="group-list">
      <ul>
        {groups.map((group, index) => (
          <li key={index} onClick={() => setSelectedGroup(group)}>
            {group}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupList;
