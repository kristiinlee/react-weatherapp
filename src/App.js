import React from 'react';
import Weathersearch from './Weathersearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App
        </h1>
        <Weathersearch />
      <p>This page was coded by <a href="https://github.com/kristiinlee" target="_blank" rel="noreferrer">Kristin Jones</a> and open sourced on <a href="https://github.com/kristiinlee/react-weatherapp" target="_blank" rel="noreferrer">Github</a></p>
      </header>
    </div>
  );
}

export default App;
