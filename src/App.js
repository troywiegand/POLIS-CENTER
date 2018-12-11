import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SpecificEventPage from './SpecificEventPage'


import EventList from './EventList'

class App extends Component {

  constructor() {
    super()
    this.state = {
      error: null,
      items: [],
      presenters: [],
      schedule: []
    }
    this.loadAPI()
  }

  componentWillMount() {
    this.loadAPI()
  }


  loadAPI = () => {
    //This gets the event info
    fetch("https://in-polis-app27.ads.iu.edu/SpiritAPI/API/Spirit/Events")
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
    fetch("https://in-polis-app27.ads.iu.edu/SpiritAPI/API/Spirit/Presenters")
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
    fetch("https://in-polis-app27.ads.iu.edu/SpiritAPI/API/Spirit/Schedule")
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
      .then(
        () => {
          let both = []

          for (let i = 0; i < this.state.items.length; i++) {
            both[i] = { ...this.state.items[i], ...this.state.schedule[i] }
          }

          this.setState({ bothArray: both })
        }
      )
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="http://www.spiritandplace.org/spwebresources/2016/S&P%20Festival%20Updated%20Final%20[color].jpg"
            width="75%" />

        </header>

        <br />
        <br />
      

        <Switch>
          {/*  This is the route for specfic pages */}
          <Route path="/Event/:eventId/:eventTitle"
            render={(navProps) => {
              return (
                <SpecificEventPage {...navProps} />
              )
            }} />
          {/*  This is the route all the events */}
          <Route path="/Event"
            render={() => { return (<EventList items={this.state.items} bothArray={this.state.bothArray} />) }} />
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


