// Imports - React
import React, { useState } from 'react';

// Imports - Components
import MovieCard from './MovieCard';

// Imports - Other
import './App.css';
import SearchIcon from './search.svg';



const API_URL = 'http://www.omdbapi.com/?apikey=2e690dce'

const App = () => {

    // Movies state is default to an empty array.
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // Set the movies state.
        setMovies(data.Search);
    };




    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Movie title..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
};

export default App;