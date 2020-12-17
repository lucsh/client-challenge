import React from 'react';
import TimezoneDetails from './timezone-details';

function Timezone({ name, onClose }) {
  return (
    <li>
      <div className="content">
        <div className="name">{name}</div>
        <TimezoneDetails name={name} />
      </div>
      <button type="button" tabIndex="0" onClick={() => onClose(name)}>
        &times;
      </button>
    </li>
  );
}

export default Timezone;
