import React, { useState, useEffect } from 'react';
import './App.css';

import Search from './components/search';
import getTimezones from './api/getTimezones';

function App() {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState();

  const [selectedOption, setSelectedOption] = useState(null);

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

  return (
    <main>
      <Search
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}
        loading={loading}
      />
    </main>
  );
}

export default App;
