import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from '../pagination';
import { MovieCard } from '../movie-card';
import { Header } from '../header';
import styles from './main.module.css';
import { SearchResult } from '../search/components/search-result';
import { Loader } from '../loader';
import { Movie } from '../movie-card/types';

const API_KEY = '8523cbb8';
const API_URL = 'https://www.omdbapi.com/';

export const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<any[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${searchTerm}&page=${currentPage}`);
        setMovies(response.data.Search || []);
        setTotalResults(parseInt(response.data.totalResults) || 0);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, currentPage]);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.main}>
      <Header handleSearch={handleSearch} />
      <SearchResult searchTerm={searchTerm} totalResults={totalResults} />
      {!loading && movies.length === 0 && <div>No results found.</div>}
      {loading ? <Loader /> : <div className={styles.movieGridContainer}>
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>}
      {totalResults > 0 && (
        <Pagination currentPage={currentPage} totalPages={Math.ceil(totalResults / 8)}
                    onPageChange={handlePageChange} />
      )}
    </div>
  );
};

