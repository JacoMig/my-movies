import React, {useEffect, useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import NavBar from './Navbar';

const apiKey = "3d6f0542169bcb26b3faac8e82401acc";
const entrypoint = `https://api.themoviedb.org/3`


function App() {
  
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])


  const searchMovie = (query = '', genre = '') => {
    if(genre === ''){
      if(query.length < 3){
        return
      }else{
        fetchMovies(query).then(response => {
          setMovies(response.results)
          })
      }
    }else {
      fetchMovies(query, 'discover', genre).then(response => {
        setMovies(response.results)
        })
    }
  }

  const fetchMovies = (query = 'matrix', type = 'search', genre = '') => {
    return fetch(`${entrypoint}/${type}/movie?api_key=${apiKey}&query=${query}&with_genres=${genre}`)
                .then(res => res.json())
  }

 
  const fetchGenres = () => {
    return  fetch(`${entrypoint}/genre/movie/list?api_key=${apiKey}`)
            .then(res => res.json())
  }

  useEffect(() => {
     searchMovie('matrix');
     fetchGenres().then(response => setGenres(response.genres));
  }, [])
  
  return (
    <div className="App">
      <NavBar onSearchMovie={searchMovie} genres={genres} onShowGenre={(genre) =>  searchMovie('', genre)}/>
      <div className="main-content">
        <h2>My Movies</h2>
        <div className="container">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default App;
