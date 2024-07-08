import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams(); // Access the movie ID from URL parameters

  // You can fetch movie details using the ID here

  return (
    <div>
      <h2>Movie Details Page</h2>
      <p>Movie ID: {id}</p>
    </div>
  );
};

export default MovieDetails;
