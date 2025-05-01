import 'core-js/stable';  // Polyfills for modern JS features
import 'regenerator-runtime/runtime';  // Required for async/await functionality
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

);

// reportWebVitals();


