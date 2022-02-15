import React from 'react'

export default function FilmTable (props) {
    return (     
        <div className={props.className}>
            {props.data}
        </div>
    )
}