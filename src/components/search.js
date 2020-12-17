import React from 'react';
import Select from 'react-select';

const customTheme = theme => ({
  ...theme,
  borderRadius: 1,
  colors: {
    ...theme.colors,
    primary: 'black',
    primary25: '#e0e0e0',
    neutral20: '#a0a0a0',
    neutral50: '#282728',
  },
});

function Search({ selectedOption, setSelectedOption, loading = false, options }) {
  return (
    <section className="search-container">
      <label htmlFor="search">Select a timezone:</label>
      <Select
        isLoading={loading}
        inputId="search"
        theme={customTheme}
        placeholder="input a timezone"
        className="search-box"
        classNamePrefix="search-box"
        autoFocus
        isSearchable
        value={selectedOption}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </section>
  );
}

export default Search;
