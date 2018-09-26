import React, { Component } from 'react';
import EventList from './EventList.js';

class EventPage extends Component {
constructor(){
  super()

  this.state={

    fakeData: [{id: 1, name: 'Whatever', description: 'yee'},
              {id: 2, name: 'Adam\'s LoL Match', description: 'He\'s Gold -2 '}]
  }
}

  render() {
    return (
      <div className="EventPage">
    
          <h1 >Events!!!</h1>
          <EventList fakeData={this.state.fakeData} />
    
      </div>
    );
  }
}

export default EventPage;


