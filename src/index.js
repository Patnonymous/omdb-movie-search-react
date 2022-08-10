import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';


// Create container, root and then render.
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)