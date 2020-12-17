import React, { useState, useEffect } from 'react';
import './App.css';

import parseName from './utils/parseNames';

import getTimezones from './api/getTimezones';
import putTimezone from './api/putTimezone';
import deleteTimezone from './api/delTimezone';

import Search from './components/search';
import Timezones from './components/timezones';

function App() {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTimezones, setSelectedTimezones] = useState([]);

  useEffect(() => {
    async function fetchData() {
      return getTimezones();
    }
    fetchData().then(({ data }) => {
      const response = data.timezones.map(tz => ({ label: parseName(tz), value: tz }));
      setOptions(response);
      setLoading(false);
    });
  }, []);

  const handleSelectedOptionChange = option => {
    setSelectedOption(option);
    const { value: name } = option;
    if (!selectedTimezones.some(e => e.name === name)) {
      setSelectedTimezones([{ name }, ...selectedTimezones]);
      putTimezone(name);
    }
  };

  const handleRemoveTimezone = name => {
    const filtered = selectedTimezones.filter(obj => {
      return obj.name !== name;
    });

    setSelectedTimezones(filtered);
    deleteTimezone(name);
  };

  return (
    <main>
      <Search
        selectedOption={selectedOption}
        setSelectedOption={handleSelectedOptionChange}
        options={options}
        loading={loading}
      />
      <Timezones timezones={selectedTimezones} removeTimeZone={handleRemoveTimezone} />
    </main>
  );
}

export default App;
