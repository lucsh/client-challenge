import React, { useState } from 'react';
import './App.css';

import Search from './components/search';

function App() {
  const options = [
    { label: 'Africa/Abidjan', value: 'Africa/Abidjan' },
    { label: 'Africa/Accra', value: 'Africa/Accra' },
    { label: 'Africa/Algiers', value: 'Africa/Algiers' },
  ];

  const loading = false;
  const [selectedOption, setSelectedOption] = useState(null);
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
