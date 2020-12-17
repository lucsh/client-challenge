import React from 'react';
import TimezoneDetails from './timezone-details';
import parseName from '../utils/parseNames';

/**
 * Timezone card
 *
 *  @param {string} [name] - Timezone name
 *  @param {boolean} [isHighlighted = false] - if the tz is highlighted
 *  @param {function} [onClose = () => {}] - delete the timezone
 */

function Timezone({ name, isHighlighted = false, onClose }) {
  return (
    <li className={`${isHighlighted ? 'highlighted' : ''}`}>
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
