import React from 'react';
import './GroupList.css';

function GroupList({ groups, setSelectedGroup, groupColors }) {
  return (
    <div className="group-list">
      <ul>
        {groups.map((group, index) => (
          <li
            key={index}
            onClick={() => setSelectedGroup(group)}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div
              className="group-label"
              style={{
                backgroundColor: groupColors[group] || '#B38BFA',
              }}
            >
              {group.substring(0, 2).toUpperCase()}
            </div>
            <span className='group-name'>{group}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupList;
