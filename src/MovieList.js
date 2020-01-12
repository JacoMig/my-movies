import React from 'react'
import MovieItem from "./MovieItem"

const MovieList = ({movies}) => {
    
    // console.log(movies)
    return (
        <div className="row justify-content-around">
            {movies && movies.map(movie => (
               <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList