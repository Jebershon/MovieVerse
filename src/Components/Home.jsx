import { Button, DropdownButton, Form,Dropdown, Row,Col, Container} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import Accordion from 'react-bootstrap/Accordion';
import mv from "../Asserts/logo2.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Home.css';
import Coursel from './Corusel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import FavMovie from './FavMovie.jsx';
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import SearchShows from "./Search.jsx";
function Home() {
  const responsive = {
    superLargeDesktop: {
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
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&2&3';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjM5NGQyY2FhNGRhMGM4Njk0ZTQ1Y2NjMzY3YjljNCIsIm5iZiI6MTcxOTYzNDM3My41NDU5NTQsInN1YiI6IjY2N2Y4ODIzZGI0ZGFjZTk2NmFmZWIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NphK0VtfEGRoWXU2EH6yMRUZF1UKKFcD90o3NiPJah0'
      }
    };
    axios.get(url, options)
      .then(response => {
        console.log("Popular");
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('error:' + error);
      });
  }, []);
       
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=10';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjM5NGQyY2FhNGRhMGM4Njk0ZTQ1Y2NjMzY3YjljNCIsIm5iZiI6MTcxOTYzNDM3My41NDU5NTQsInN1YiI6IjY2N2Y4ODIzZGI0ZGFjZTk2NmFmZWIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NphK0VtfEGRoWXU2EH6yMRUZF1UKKFcD90o3NiPJah0'
      }
    };
    axios.get(url, options)
      .then(response => {
        console.log("Series");
        console.log(response.data.results);
        setSeries(response.data.results);
      })
      .catch(error => {
        console.error('error:' + error);
      });
  }, []);


    const [famovie, setFamovies] = useState([]);
    useEffect(() => {
      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjM5NGQyY2FhNGRhMGM4Njk0ZTQ1Y2NjMzY3YjljNCIsIm5iZiI6MTcxOTYzNDM3My41NDU5NTQsInN1YiI6IjY2N2Y4ODIzZGI0ZGFjZTk2NmFmZWIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NphK0VtfEGRoWXU2EH6yMRUZF1UKKFcD90o3NiPJah0'
        }
      };
      axios.get(url, options)
        .then(response => {
          console.log("Trending");
          console.log(response.data.results);
          setFamovies(response.data.results);
        })
        .catch(error => {
          console.error('error:' + error);
        });
    }, []);

    const [watchlist, setWatchlist] = useState([]);
    

  const[newmovie,setNewmovie] = useState([]);
  const[date,setDate] = useState({});
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjM5NGQyY2FhNGRhMGM4Njk0ZTQ1Y2NjMzY3YjljNCIsIm5iZiI6MTcxOTYzNDM3My41NDU5NTQsInN1YiI6IjY2N2Y4ODIzZGI0ZGFjZTk2NmFmZWIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NphK0VtfEGRoWXU2EH6yMRUZF1UKKFcD90o3NiPJah0'
      }
    };
      axios.get(url, options)
      .then(response => {
        console.log("Upcoming Movies");
        console.log(response.data.results);
        setNewmovie(response.data.results);
        setDate(response.data.dates);
      })
      .catch(error => {
        console.error('error:' + error);
      });
  }, []);
 
   const[provide,setprovide] = useState([]);
   useEffect(() => {
    const url = 'https://api.themoviedb.org/3/watch/providers/movie?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjM5NGQyY2FhNGRhMGM4Njk0ZTQ1Y2NjMzY3YjljNCIsIm5iZiI6MTcxOTYzNDM3My41NDU5NTQsInN1YiI6IjY2N2Y4ODIzZGI0ZGFjZTk2NmFmZWIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NphK0VtfEGRoWXU2EH6yMRUZF1UKKFcD90o3NiPJah0'
      }
    };
    axios.get(url, options)
      .then(response => {
        console.log(response.data.results);
        setprovide(response.data.results);
      })
      .catch(error => {
        console.error('error:' + error);
      });
  }, []);
    return (
      <>
      <div style={{backgroundColor:"black",color:"grey"}}>
      <div className="nbar">
          <div className="nbar-img">
            <img src={mv} width={100} height={70}></img>
          </div>
          <div className="nbar-ser">
           <SearchShows/>
          </div>
          <div className="nbar-btn">
            <Button className="btn-warning sign">Sign in</Button>
          </div>
      </div>
      <Coursel/>
      <hr/>
      <h3 class="ipc-title__text">My Watchlist</h3>
      <center>
      {
        watchlist.length==1?(
          <>
          </>
        ):(
          <>
          </>
        )
      }
      </center>
      <hr/>
      <h1 style={{color:"#f5c518"}}>More to Explore</h1>
      <h3 class="ipc-title__text">Top Rated Movies</h3>
      <center>
      <div className="movie-list">
          <Carousel responsive={responsive} infinite={true} keyBoardControl={true} showDots={false} autoPlay={false} autoPlaySpeed={3000}>
          {famovie?.map((movie, i) => (
            <Card key={i} className="card-1">
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={70} height={300} />
              <Card.Body>
               <p style={{display:"flex",justifyContent:"space-between"}}>
                <i className="bi bi-star star"></i> 
                {Math.round(movie.vote_average)}
                </p>
                <Card.Title>{movie.title}</Card.Title>
                <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Description</Accordion.Header>
                  <Accordion.Body>
                  <Card.Text>
                  {movie.overview}
                  </Card.Text>
                  </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                <Button className="btn-warning m-4"><i class="bi bi-plus-square"></i>  Add to Watchlist</Button>
              </Card.Body>
            </Card>
          ))}
          </Carousel>
      </div>
      </center>
      <hr/>
      <h3 class="ipc-title__text">Most Popular and Trending Movies</h3>
      <center>
      <div className="movie-list">
          <Carousel responsive={responsive} infinite={true} keyBoardControl={true} showDots={false} autoPlay={false} autoPlaySpeed={3000}>
          {movies?.map((movie, i) => (
            <Card key={i} className="card-1">
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={70} height={300} />
              <Card.Body>
               <p style={{display:"flex",justifyContent:"space-between"}}>
                <i className="bi bi-star star"></i> 
                {Math.round(movie.vote_average)}
                </p>
                <Card.Title>{movie.title}</Card.Title>
                <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Description</Accordion.Header>
                  <Accordion.Body>
                  <Card.Text>
                  {movie.overview}
                  </Card.Text>
                  </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                <Button className="btn-warning m-4"><i class="bi bi-plus-square"></i>  Add to Watchlist</Button>
              </Card.Body>
            </Card>
          ))}
          </Carousel>
      </div>  
       </center>

       <hr/>

      <h3 class="ipc-title__text">Most popular Series</h3>
      <center>
      <div className="movie-list">
          <Carousel responsive={responsive} infinite={true} keyBoardControl={true} showDots={false} autoPlay={false} autoPlaySpeed={3000}>
          {series?.map((show, i) => (
            <Card className="show-details-card" style={{ margin: '1rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`} alt={show.name} />
            <Card.Body>
              <Card.Title>{show.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{show.first_air_date}</Card.Subtitle>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Overview</Accordion.Header>
                  <Accordion.Body>
              <Card.Text>
                {show.overview}
              </Card.Text>
              </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>More Info</Accordion.Header>
                  <Accordion.Body>
                    <p><strong>Original Name:</strong> {show.original_name}</p>
                    <p><strong>Language:</strong> {show.original_language}</p>
                    <p><strong>Country:</strong> {show.origin_country.join(', ')}</p>
                    <p><strong>Popularity:</strong> {show.popularity}</p>
                    <p><strong>Vote Average:</strong> {show.vote_average}</p>
                    <p><strong>Vote Count:</strong> {show.vote_count}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Button className="btn-warning mt-4"><i className="bi bi-plus-square"></i> Add to Watchlist</Button>
            </Card.Body>
          </Card>
          ))}
          </Carousel>
      </div>  
       </center>

      <hr/>

      <h3 class="ipc-title__text">Upcoming Movies</h3>
      <p>&nbsp;&nbsp;&nbsp;Dates from {date.minimum} - {date.maximum}</p>
      <center>
      <div className="movie-list">
        <Carousel responsive={responsive} infinite={true} keyBoardControl={true} showDots={false} autoPlay={true} autoPlaySpeed={3000}>
        {newmovie?.map((movie, i) => (
          <Card key={i} className="card-1">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={70} height={300} />
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <i className="bi bi-star star"></i>
                {Math.round(movie.vote_average)}
              </div>
              <Card.Title>{movie.title}</Card.Title>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Description</Accordion.Header>
                  <Accordion.Body>
                    <Card.Text>
                      {movie.overview}
                    </Card.Text>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Button className="btn-warning m-4"><i class="bi bi-plus-square"></i>  Add to Watchlist</Button>
            </Card.Body>
          </Card>
        ))}
          </Carousel>
      </div>
      </center>

      <hr/>

      <h1 style={{color:"#f5c518"}}>Streaming Partners</h1>
      <h3 class="ipc-title__text">Top most Movie platforms</h3>
      <center>
        <div className="logg">
        {
        provide?.map( (provider, i) => (
          <div key={i}>
            <OverlayTrigger 
              placement="top"
              overlay={<Tooltip id={`tooltip-top`}><strong>{provider.provider_name}</strong>.</Tooltip>}>
            <img 
            src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`} 
            alt={provider.provider_name} width={60} height={60} className="loggo"/>
            </OverlayTrigger>
          </div>
        ))}
        </div>
      </center>
      <hr/>
      </div>
      </>
    );
  }
  
  export default Home;