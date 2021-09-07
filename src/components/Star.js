import React from 'react'
import './Star.css'

export default function Star({ nr, active, title, setMovies, movies}) {
    
    const handleClick = (nr, title) => {
        let currentMovie = movies.filter(movie => movie.title === title)[0]
        let newArray = movies.map(movie => {
            if(currentMovie.title === movie.title){
                return {
                    ...movie,
                    points: nr
                }
            }
            return movie
        })
        setMovies(newArray)
    }

    let starActive = active ? ' star-active' : ''

    return (
     <div className={'star' + starActive} onClick={() =>handleClick(nr, title)}>
            
        </div>
    )
}
