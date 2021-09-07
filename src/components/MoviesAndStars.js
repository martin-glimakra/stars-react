import React, { useState } from 'react'
import SetOfStars from './SetOfStars'

export default function MoviesAndStars() {
    const [movies, setMovies] = useState([
        {
            url: 'https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/',
            title: 'dieHard',
            points: 0,
            id: 1
        },
        {
            url: 'https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/',
            title: 'pokemon',
            points: 0,
            id: 2
        }
    ])
    

    console.log('movies i Card', movies)
    return (
        <div >
            {movies.map(movie => { 
            
                return <div key={movie.id}>
                    <img src={movie.url} alt='dummy-replace-later' />
                    <h2> { movie.title } </h2>
                        <SetOfStars 
                            points={movie.points} 
                            title={movie.title} 
                            movies={movies}
                            setMovies={setMovies} 
                        />
                    </div>
                })}
        </div>
    )
}
