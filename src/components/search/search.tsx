import React, { useState } from 'react';
import styles from './search.module.css';
import searchIcon from '../../assets/search/search-icon.svg';
import { SearchProps } from './types';


export const Search: React.FC<SearchProps> = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchInputContainer}>
          <img src={searchIcon} alt='Search' className={styles.searchIcon} />
          <input type='text' value={searchTerm} onChange={handleChange} className={styles.searchInput}
                 onKeyDown={handleKeyDown}
                 placeholder='Search movies...' />
        </div>
        <button type='submit' className={styles.hiddenButton}>Search</button>
      </form>
    </div>
  );
};

