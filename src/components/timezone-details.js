import React, { useEffect, useState } from 'react';

import getDateTime from '../api/getTimezoneDetails';
import useInterval from '../utils/useInterval';
import config from '../config';

/**
 * Timezone Details
 *
 * Fetches timezone details with the timezone name
 *
 *  @param {string} [name] - Timezone name
 */

function TimezoneDetails({ name }) {
  const [timezone, setTimezone] = useState({});
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    async function fetchData() {
      return getDateTime(name);
    }
    if (refresh) {
      fetchData().then(r => {
        setTimezone(r.data);
        setRefresh(false);
      });
    }
  }, [name, refresh]);

  useInterval(() => {
    setRefresh(true);
  }, 1000 * config.refreshInterval);

  return (
    <div className="details">
      <div className={`date ${!timezone.time ? 'loading' : undefined}`}>{!timezone.time ? null : timezone.date}</div>
      <div className={`time ${!timezone.time ? 'loading' : undefined}`}>{!timezone.time ? null : timezone.time}</div>
    </div>
  );
}

export default TimezoneDetails;
