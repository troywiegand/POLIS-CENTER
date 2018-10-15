import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SpecificEventPage from './SpecificEventPage'


import EventList from './EventList'

class App extends Component {

  constructor(){
    super()
    this.state = {
      error: null,
      items: [],
      presenters: [],
      schedule: []
    }
    this.loadAPI()
  }
  
  
loadAPI = ()=> {
  //This gets the event info
  fetch("http://in-polis-app27.ads.iu.edu/SpiritAPI/API/Spirit/Events")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isEventsLoaded: true,
          items: result
        })
      },

      (error) => {
        this.setState({
          isEventsLoaded: true,
          error
        })
      }
    )
//This gets the presenters info 
    fetch("http://in-polis-app27.ads.iu.edu/SpiritAPI/API/Spirit/Presenters")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isPresentersLoaded: true,
          presenters: result
        })
      },

      (error) => {
        this.setState({
          isPresentersLoaded: true,
          error
        })
      }
    )
//This gets the info about the schedule
    fetch("http://in-polis-app27.ads.iu.edu/SpiritAPI/API/Spirit/Schedule")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isScheduleLoaded: true,
          schedule: result
        })
      },

      (error) => {
        this.setState({
          isScheduleLoaded: true,
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
         {/*  This is the route for specfic pages */}
          <Route path="/Event/:eventId/:eventTitle"
            render={(navProps) => {
              return (
                <SpecificEventPage {...navProps} items={this.state.items} 
                  presenters={this.state.presenters} loadAPI={this.loadAPI}/>
              )
            }} />
            {/*  This is the route all the events */}
          <Route path="/Event"
            render={() => { return (<EventList items={this.state.items} />) }} />
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


