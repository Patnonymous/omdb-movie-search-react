import React from 'react'
import { useEffect } from 'react';



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
        <h1>The app is running.</h1>
    );
};

export default App;