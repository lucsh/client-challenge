import React from 'react';
import TimezoneDetails from './timezone-details';

function Timezone({ name }) {
  return (
    <li>
      <div className="content">
        <div className="name">{name}</div>
        <TimezoneDetails name={name} />
      </div>
    </li>
  );
}

export default Timezone;
