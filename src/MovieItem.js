import React from 'react';

const  MovieItem = ({movie}) => {
   
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card" key={movie.id}>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                    className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text text-sm-left">
                        {movie.overview.substring(0, 100)}...
                    </p>
                    <a href="#" className="btn btn-primary">View Detail</a>
                </div>
            </div>
        </div>
    )
}

 export default MovieItem