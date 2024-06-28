import { Button, DropdownButton, Form,Dropdown} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import mv from "../Asserts/logo2.png";
import './Home.css';
import Coursel from './Corusel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import FavMovie from './FavMovie.jsx';
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?s=game&apikey=6dd675d4')
        .then(response => {
          console.log("Fetched cart details:", response.data.Search);
          setMovies(response.data.Search);})
        .catch(error => {
          console.error("Error fetching cart details:", error);})
        },[]);
    const [fmovie, setFmovies] = useState([]);
    useEffect(() => {
      axios.get('')
      .then(response => {
        console.log("Fetched cart details:", response.data.Search);
        setMovies(response.data.Search);})
      .catch(error => {
        console.error("Error fetching cart details:", error);})
      },[]);
    return (
      <>
      <div>
      <div className="nbar">
          <div className="nbar-img">
            <img src={mv} width={100} height={70}></img>
          </div>
          <div className="nbar-ser">
           <Form style={{display:"flex",flexDirection:"row",gap:"10px"}}>
           <DropdownButton title={<i class="bi bi-list"></i>} variant="warning">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
           </DropdownButton>
           <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
           </Form>
          </div>
          <div className="nbar-btn">
            <Button className="btn-warning sign">Sign in</Button>
          </div>
      </div>
      <hr/>
      <Coursel/>
      <h3 class="ipc-title__text">My Favoruite Cinema</h3>
      <div className="movie-list">
      <Carousel responsive={responsive} infinite={true} keyBoardControl={true} showDots={true} autoPlay={true} autoPlaySpeed={3000}>
        {movies?.map((movie, i) => (
          <div key={i} className="carousel-item-custom">
            <img  src={movie.Poster} alt={movie.Title} />
            <div className="carousel-caption">
              <h3>{movie.Title}</h3>
              <p>{movie.Plot}</p>
            </div>
          </div>
        ))}
      </Carousel>
      </div>
      <hr/>
      <h3 class="ipc-title__text">Top 10 on IMDb this week</h3>
      <div className="movie-list">
      <Carousel responsive={responsive} infinite={true} keyBoardControl={true} showDots={true} autoPlay={true} autoPlaySpeed={3000}>
        {movies?.map((movie, i) => (
          <div key={i} className="carousel-item-custom">
            <img  src={movie.Poster} alt={movie.Title} />
            <div className="carousel-caption">
              <h3>{movie.Title}</h3>
              <p>{movie.Plot}</p>
            </div>
          </div>
        ))}
      </Carousel>
      </div>
      <hr/>
      <h3 class="ipc-title__text">Most popular Series</h3>
            <div className="movie-list">
            <Carousel responsive={responsive} infinite={true} keyBoardControl={true} showDots={true} autoPlay={true} autoPlaySpeed={3000}>
        {movies?.map((movie, i) => (
          <div key={i} className="carousel-item-custom">
            <img  src={movie.Poster} alt={movie.Title} />
            <div className="carousel-caption">
              <h3>{movie.Title}</h3>
              <p>{movie.Plot}</p>
            </div>
          </div>
        ))}
      </Carousel>
       </div>
      <hr/>
      <h3 class="ipc-title__text">Most popular Movies</h3>
            <div className="movie-list">
            <Carousel responsive={responsive} infinite={true} keyBoardControl={true} showDots={true} autoPlay={true} autoPlaySpeed={3000}>
        {movies?.map((movie, i) => (
          <div key={i} className="carousel-item-custom">
            <img  src={movie.Poster} alt={movie.Title} />
            <div className="carousel-caption">
              <h3>{movie.Title}</h3>
              <p>{movie.Plot}</p>
            </div>
          </div>
        ))}
      </Carousel>
      </div>
      </div>
      </>
    );
  }
  
  export default Home;