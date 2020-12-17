import React from 'react';
import Timezone from './timezone';
/**
 * Timezone List
 *
 *  @param {array} [timezones] - Selected timezones array
 *  @param {string} [highlighted] - Highlighted timezone name
 *  @param {function} [removeTimeZone = () => {}] - remove the timezone
 */

function Timezones({ timezones = [], highlighted, removeTimeZone = () => {} }) {
  return (
    <section>
      <ul className="timezones">
        {timezones.length > 0
          ? timezones.map(({ name, date, time }) => (
              <Timezone
                isHighlighted={highlighted === name}
                key={name}
                name={name}
                date={date}
                time={time}
                onClose={removeTimeZone}
              />
            ))
          : null}
      </ul>
    </section>
  );
}

export default Timezones;
