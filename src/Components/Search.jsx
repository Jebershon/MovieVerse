import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './search.css'; // Import the CSS file

const SearchShows = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const Navigate = useNavigate();

  const fetchSuggestions = async (query) => {
    if (query.length >= 3) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          {
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer your_api_token_here'
            }
          }
        );
        setSuggestions(response.data.results);
      } catch (error) {
        console.error('Error fetching data from API', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const getSuggestions = ({ value }) => {
    fetchSuggestions(value);
  };

  const clearSuggestions = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const getSuggestionValue = (suggestion) => suggestion.title;

  const handleSuggestionClick = (suggestion) => {
    Navigate(`/movie/${suggestion.id}`);
  };

  const renderSuggestion = (suggestion, { isHighlighted }) => (
    <div
      className={`sugg ${isHighlighted ? 'suggestion-item--highlighted' : ''}`}
      onClick={() => handleSuggestionClick(suggestion)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w92${suggestion.poster_path}`}
        alt={suggestion.title}
        className="sugg-img"
      />
      <span className="sugg-text">{suggestion.title}</span>
    </div>
  );

  const inputProps = {
    placeholder: 'Search for a movie',
    value,
    onChange,
    className: 'form-control'
  };

  return (
    <div className="suggestion-container">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={getSuggestions}
        onSuggestionsClearRequested={clearSuggestions}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={{
          suggestionsList: 'suggestion-list',
        }}
      />
    </div>
  );
};

export default SearchShows;
