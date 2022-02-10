import React from 'react'

export default function Result (props) {
    console.log(props)
    const moviesList = (props.data.Search) ? props.data.Search.map(x => {
        return (
            <div>
            <h1>{x.Title}</h1>
            <img alt={x.Title} src={x.Poster}/>
            </div>
            )
    }) : <p>No film</p>;
    return (
        <div>
            {moviesList}
        </div>
    )
}