import React from 'react';
import TimezoneDetails from './timezone-details';
import parseName from '../utils/parseNames';

function Timezone({ name, onClose }) {
  return (
    <li>
      <div className="content">
        <div className="name">{parseName(name)}</div>
        <TimezoneDetails name={name} />
      </div>
      <button type="button" tabIndex="0" onClick={() => onClose(name)}>
        &times;
      </button>
    </li>
  );
}

export default Timezone;
