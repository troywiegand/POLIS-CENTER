import React, { Component } from 'react';

class SpecificEventPage extends Component {
constructor(props){
  super(props)

 let eventNumb= this.props.location.pathname.slice(7,8)
 let eventIndex= parseInt(eventNumb)-2
 this.state={eventIndex,Header: "Header"}
 this.props.loadAPI()
}

componentWillReceiveProps(){
  if(this.props.items[this.state.eventIndex]!==undefined)
    this.setState({Header: this.props.items[this.state.eventIndex].eventTitle})
}


  render() {
    return (
      <div className="SpecificEventPage">
    
          <h1>
            {this.state.Header}
          </h1>
    

    <h3>
Presenters Include:

    </h3>
      </div>
    );
  }
}

export default SpecificEventPage;

