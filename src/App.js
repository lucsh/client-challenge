import React, { useState, useEffect } from 'react';
import './App.css';

import Search from './components/search';
import getTimezones from './api/getTimezones';
import putTimezone from './api/putTimezone';
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
      const response = data.timezones.map(tz => ({ label: tz, value: tz }));
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

  return (
    <main>
      <Search
        selectedOption={selectedOption}
        setSelectedOption={handleSelectedOptionChange}
        options={options}
        loading={loading}
      />
      <Timezones timezones={selectedTimezones} />
    </main>
  );
}

export default App;
