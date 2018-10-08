import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SpecificEventPage from './SpecificEventPage'
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


import EventPage from './EventPage.js'

class App extends Component {

  constructor(){
    super()
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }
  
  
componentWillMount() {
  fetch("http://in-polis-app27.ads.iu.edu/SpiritAPI/API/Spirit/Events")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        })
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spirit & Place</h1>
        </header>

        <Switch>
          <Route path="/Event/:EventName"
            render={(navProps) => {
              return (
                <SpecificEventPage {...navProps} items={this.state.items} />
              )
            }} />
          <Route path="/Event"
            render={() => { return (<EventPage items={this.state.items} />) }} />
          <Route render={() => {
            return (
              <Redirect to="/Event" />
            )
          }} />

        </Switch>
      </div>
    );
  }
}

export default App;


