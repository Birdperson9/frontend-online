import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  let [showState, setShowState] = useState(false);
  let [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (showState) {
      console.log('Search input is active!');
    }
  }, [showState]);

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
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className='fa-2x search-icon'
        onClick={changeShowState}
      />
    </div>
  );
};

export default Search;
