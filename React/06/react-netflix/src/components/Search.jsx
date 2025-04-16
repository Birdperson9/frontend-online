import React, { useState } from 'react';

const Search = () => {
  let [showState, setShowState] = useState(false);
  let [searchValue, setSearchValue] = useState('');

  function changeShowState() {
    setShowState((showState) => !showState);
  }

  const inputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className='search-container'>
      {showState && (
        <div className='search-input-wrapper'>
          <input
            type='text'
            name='search'
            className='search-input'
            placeholder='Search film...'
            value={searchValue}
            onChange={inputChange}
          />
          {searchValue.length > 2 && (
            <div className='search-result'>User find: {searchValue}</div>
          )}
        </div>
      )}
      <i
        className='fa-solid fa-magnifying-glass fa-2x search-icon'
        onClick={changeShowState}
      ></i>
    </div>
  );
};

export default Search;
