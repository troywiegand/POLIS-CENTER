import React, { Component } from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SpecificEventPage from './SpecificEventPage'
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


import EventPage from './EventPage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spirit & Place</h1>
        </header>
        
        <Switch>
        <Route path="/Event/:EventName" 
      render ={(navProps)=>{
        return(
          <SpecificEventPage {...navProps} />
         )
      }}/>
          <Route path="/Event"
            render={() => {return(<EventPage />)}}/>
          <Route render={()=>{
            return(
              <Redirect to="/Event"/>
            )
          }} />
           
        </Switch>
      </div>
    );
  }
}

export default App;


