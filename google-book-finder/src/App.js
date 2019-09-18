import React from 'react';
import BookCardContainer from './BookCardContainer';
import SearchBar from './SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header><h1>A Simple Book Finder</h1></header>
      <body>
        <SearchBar />
        <BookCardContainer />
      </body>
    </div>
  );
}

export default App;
