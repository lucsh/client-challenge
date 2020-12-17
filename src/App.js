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
  const [highlighted, setHighlighted] = useState(null);

  // fetch data on load
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

  // remove highlighted timezone after a second
  useEffect(() => {
    const timer = setTimeout(() => {
      setHighlighted(null);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setHighlighted]);

  // clear selected option after a second
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedOption(null);
    }, 1000);
    return () => clearTimeout(timer);
  }, [selectedOption]);

  // change selected option event handler
  const handleSelectedOptionChange = option => {
    setSelectedOption(option);
    const { value: name } = option;
    // if the option is not in the selected options,
    // add it to the beginning of the array and hit the server
    // else set as highlighted for user feedback
    if (!selectedTimezones.some(e => e.name === name)) {
      setSelectedTimezones([{ name }, ...selectedTimezones]);
      putTimezone(name);
    } else {
      setHighlighted(name);
    }
  };

  // remove the tz from the list and hit the server
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
      <Timezones timezones={selectedTimezones} highlighted={highlighted} removeTimeZone={handleRemoveTimezone} />
    </main>
  );
}

export default App;
