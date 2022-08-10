// Imports - React
import React from 'react';
import { useEffect } from 'react';

// Imports - Components
import MovieCard from './MovieCard';

// Imports - Other
import './App.css';
import SearchIcon from './search.svg';



const API_URL = 'http://www.omdbapi.com/?apikey=2e690dce'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    };

    useEffect(() => {
        searchMovies('batman');
    }, []);


    return (
        <div className='app'>
            <h1>MovieLand</h1>


            <div className='search'>
                <input placeholder='Movie title...' value='Superman' onChange={() => { }} />
                <img src={SearchIcon} alt='Search' onClick={() => { }} />
            </div>

            <div className='container'>

            </div>
        </div>
    );
};

export default App;