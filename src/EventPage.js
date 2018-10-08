import React, { Component } from 'react';
import EventList from './EventList.js';

class EventPage extends Component {
constructor(){
  super()
}

  render() {
    return (
      <div className="EventPage">
    
          <h1 >Events!!!</h1>
          <EventList items={this.props.items} />
    
      </div>
    );
  }
}

export default EventPage;


