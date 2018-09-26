import React, { Component } from 'react';
import './App.css';
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


import EventPage from './EventPage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spirit & Place</h1>
        </header>
        < EventPage />
      </div>
    );
  }
}

export default App;


