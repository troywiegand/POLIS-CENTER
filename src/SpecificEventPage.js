import React, { Component } from 'react';

class SpecificEventPage extends Component {
constructor(props){
  super(props)

 let eventNumb= this.props.location.pathname.slice(7,8)
 console.log(eventNumb)
 let eventIndex= parseInt(eventNumb)-2
 console.log(eventIndex)
 this.state={eventIndex}
 console.log(this.props)
}

  render() {
    return (
      <div className="SpecificEventPage">
    
          <h1>
            {}
          </h1>
    
      </div>
    );
  }
}

export default SpecificEventPage;

