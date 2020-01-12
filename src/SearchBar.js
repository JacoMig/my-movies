import React, {useState} from 'react'

const SearchBar = ({onSearchMovie}) => {

    const [query, setQuery] = useState('')

    const onSearchChange = (e) => {
        setQuery(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
       // console.log(query)
        onSearchMovie(query);
    }

    return (
        <form onSubmit={submitForm} className="form-inline">
            <input className="form-control mr-sm-2" value={query} onChange={onSearchChange} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}


export default SearchBar