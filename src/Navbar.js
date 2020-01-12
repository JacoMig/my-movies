import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({onSearchMovie, genres, onShowGenre}) => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a href="/" className="navbar-brand">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Genres
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {genres.length > 0 && 
                            genres.map(genre => (
                                <div key={genre.id} 
                                    id={genre.id} 
                                    onClick={(e) => onShowGenre(e.target.id)}
                                    className="dropdown-item">
                                    {genre.name}
                                </div>
                            )) 
                        }
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                    </div>
                </li>
           </ul>
            <SearchBar onSearchMovie={onSearchMovie}/>
            </div>
        </nav>
    )
}

export default Navbar