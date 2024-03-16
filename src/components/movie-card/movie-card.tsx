import React from 'react';
import styles from './movie-card.module.css';
import placeholderImage from '../../assets/placeholder/placeholder-image.jpg';
import { MovieProps } from './types';


export const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      {movie.Poster !== 'N/A'
        ? (
          <img src={movie.Poster} alt={movie.Title} className={styles.movieCardImage} />
        ) : (
          <div className={styles.placeholderContainer}>
            <img src={placeholderImage} alt='Placeholder' className={styles.placeholderImage} />
          </div>
        )}

      <div className={styles.movieCardContent}>
        <p className={styles.movieCardTitle}>Name: {movie.Title}</p>
        <p className={styles.movieCardYear}>Year: {movie.Year}</p>
        <p className={styles.movieCardImdbID}>IMDB ID: {movie.imdbID}</p>
        <p className={styles.movieCardType}>Type: {movie.Type}</p>
      </div>
    </div>
  );
};

