import React from 'react'
import Film from './Film'
import FilmTable from './FilmTable'
import './../App.css';

export default function Result (props) {
    const moviesList = props.data.Search;
    const movies = (moviesList) ? moviesList.sort((first, second) => {
            let order = 0;        
            first.Year < second.Year ? order = -1 : order = 1;        
            return order;        
        }).map(movie => {
            return (
                <Film
                    className = "Movie-Item"
                    title = {movie.Title}
                    year = {movie.Year}
                    poster = {movie.Poster}
                    key = {movie.imdbID}
                    id={movie.imdbID}
                />
                )
        }) : (props.data.Response === "False" ) ? <p className="warning">No film found</p> : <p className="warning">Enter your search</p>;
        
    return (
        <FilmTable className="Movie-List" data={movies}/>
    )
}