import React from 'react';
import Timezone from './timezone';

function Timezones({ timezones = [], removeTimeZone }) {
  return (
    <section>
      <ul className="timezones">
        {timezones.length > 0
          ? timezones.map(({ name, date, time }) => (
              <Timezone key={name} name={name} date={date} time={time} onClose={removeTimeZone} />
            ))
          : null}
      </ul>
    </section>
  );
}

export default Timezones;
