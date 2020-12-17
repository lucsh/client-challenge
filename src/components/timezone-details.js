import React, { useEffect, useState } from 'react';

import getDateTime from '../api/getTimezoneDetails';

function TimezoneDetails({ name }) {
  const [timezone, setTimezone] = useState({});

  useEffect(() => {
    async function fetchData() {
      return getDateTime(name);
    }
    fetchData().then(r => {
      setTimezone(r.data);
    });
  }, [name]);

  return (
    <div className="details">
      <div>{!timezone.time ? null : timezone.date}</div>
      <div>{!timezone.time ? null : timezone.time}</div>
    </div>
  );
}

export default TimezoneDetails;
