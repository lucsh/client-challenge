import React from 'react';
import Select from 'react-select';

function Search({ selectedOption, setSelectedOption, loading = false, options }) {
  return (
    <section className="search-container">
      <label htmlFor="search">Select a timezone:</label>
      <Select
        isLoading={loading}
        inputId="search"
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
