import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'NA' ? movie.Poster : 'http://placekitten.com/400/400'} alt="Movie Poster" />
            </div>

            <div>
                <span>{movie.type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};


export default MovieCard;
