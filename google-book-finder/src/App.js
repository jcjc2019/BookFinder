import React from 'react';
import BookCard from './BookCard';
import SearchBar from './SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header><h1>A Simple Book Finder</h1></header>
      <body>
        <SearchBar />
        <BookCard />
      </body>
    </div>
  );
}

export default App;
