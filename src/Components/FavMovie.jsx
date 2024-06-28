import React from 'react';

const FavMovie = ({ movie }) => {
    return (
        <div className="movie">
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>
    );
};

export default FavMovie;
