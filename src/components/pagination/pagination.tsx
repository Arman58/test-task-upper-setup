import React from 'react';
import styles from './pagination.module.css';
import { PaginationProps } from './types';


export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage: number | string) => {
    if (typeof newPage === 'number') {
      if (newPage >= 1 && newPage <= totalPages) {
        onPageChange(newPage);
      }
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    let startPage, endPage;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 1) {
      pages.unshift('...');
    }
    if (endPage < totalPages) {
      pages.push('...');
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.page} ${currentPage === 1 ? styles.disabled : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          className={`${styles.page} ${page === currentPage ? styles.active : ''}`}
          onClick={() => handlePageChange(page)}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      <button
        className={`${styles.page} ${currentPage === totalPages ? styles.disabled : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};


