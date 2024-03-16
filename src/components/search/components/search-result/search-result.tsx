import styles from './search-result.module.css';
import React from 'react';
import { SearchResultProps } from './types';


export const SearchResult: React.FC<SearchResultProps> = ({ totalResults, searchTerm }) => {
  return (
    <>
      {searchTerm && totalResults > 1 && <div className={styles.searchResultBlock}>
        <div><span>You searched for:</span> <span className={styles.searchTerm}> {searchTerm}</span></div>
        <div className={styles.searchResult}>{totalResults} results</div>
      </div>
      }
    </>
  );
};
