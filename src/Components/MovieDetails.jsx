import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './MovieDetails.css'; // Assuming you have a CSS file for styling

const MovieDetails = () => {
  const { id } = useParams(); // Access the movie ID from URL parameters
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjM5NGQyY2FhNGRhMGM4Njk0ZTQ1Y2NjMzY3YjljNCIsIm5iZiI6MTcxOTYzNDM3My41NDU5NTQsInN1YiI6IjY2N2Y4ODIzZGI0ZGFjZTk2NmFmZWIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NphK0VtfEGRoWXU2EH6yMRUZF1UKKFcD90o3NiPJah0'
          }
        });
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <Card className="movie-details-card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <div className="movie-rating">{movie.vote_average}/10</div>
        <Card.Text>
          {movie.overview}
        </Card.Text>
        <div className="movie-info">
          <div><strong>Language:</strong> {movie.original_language}</div>
          <div><strong>Production:</strong> {movie.production_companies.map(company => company.name).join(', ')}</div>
          <div className="movie-age-rating">
            {movie.adult ? '18+' : '16'}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;
