import React, { Component } from 'react';
import EventList from './EventList.js';

class EventPage extends Component {
  render() {
    return (
      <div className="EventPage">
    
          <h1 >Events!!!</h1>
          <EventList />
    
      </div>
    );
  }
}

export default EventPage;


