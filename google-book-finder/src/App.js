import React from 'react';
import SearchBar from './SearchBar'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <header><h1>A Simple Book Finder</h1></header>
        <body>
          <SearchBar />
        </body>
      </div>
    );
  }
}

export default App;
