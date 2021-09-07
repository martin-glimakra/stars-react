import Star from './Star'

export default function SetOfStars(
    {title, setMovies, movies, points}
    ) {

    return (
        <div>
        { [1, 2, 3, 4, 5].map(num => 
        <Star 
            title={title} 
            key={num} 
            nr={num} 
            active={points >= num ? true : false}
            movies={movies}
            setMovies={setMovies} 
        />) }
        </div>
    )
}
