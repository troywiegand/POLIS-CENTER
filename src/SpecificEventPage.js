import React, { Component } from 'react';

class SpecificEventPage extends Component {
constructor(props){
  super(props)

 let eventNumb= this.props.location.pathname.slice(7,8)
 let eventIndex= parseInt(eventNumb, 10)-2
 this.state={eventIndex,Header: "Header",PresenterList: ""}
}

componentWillReceiveProps(){
  //This gets the title of the event from this.props.items
  let eventNumb= this.props.location.pathname.slice(7,8)
  if(this.props.bothArray[this.state.eventIndex]!==undefined)
    this.setState({Header: this.props.bothArray[this.state.eventIndex].eventTitle,
		   PresenterList: this.props.bothArray[this.state.eventIndex].PresenterList,
		   StartDate: this.props.bothArray[this.state.eventIndex].startDate,
		   EndDate: this.props.bothArray[this.state.eventIndex].endDate,
		   RSVP: this.props.bothArray[this.state.eventIndex].eventRsvp})

    //This part isn't really working
  // if(this.props.presenters!==undefined)
  //   this.props.presenters.map((presenter)=>{
  //     if(presenter.eventId===eventNumb)
  //       this.setState({PresenterList: this.state.PresenterList+presenter.lastName})
  //       return null
  //   })
}


  render() {
    return (
      <div className="SpecificEventPage">
    
          <h1>
            {this.state.Header}
          </h1>
    

    <h3>
Presenters Include:
<div > {this.state.PresenterList}</div>
<div> Start Date: {this.state.StartDate} </div>
RSVP: {this.state.RSVP}
    </h3>
      </div>
    );
  }
}

export default SpecificEventPage;

