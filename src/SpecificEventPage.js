import React, { Component } from 'react';

class SpecificEventPage extends Component {
constructor(props){
  super(props)

 let eventNumb= this.props.location.pathname.slice(7,8)
 let eventIndex= parseInt(eventNumb, 10)-2
 this.state={eventIndex,Header: "Header",PresenterList: "", items: []}
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

componentDidMount(){
  //This gets the title of the event from this.props.items
  let eventNumb= this.props.location.pathname.slice(7,8)
  let eventIndex = parseInt(eventNumb, 10) - 2
  console.log("eventNumb is " + eventIndex)
  console.log("this state is ")
  console.log(this.state)
  // if(this.state.bothArray[eventIndex]!==undefined)
  //   this.setState({Header: this.props.bothArray[eventIndex].eventTitle,
	// 	   PresenterList: this.props.bothArray[eventIndex].PresenterList,
	// 	   StartDate: this.props.bothArray[eventIndex].startDate,
	// 	   EndDate: this.props.bothArray[eventIndex].endDate,
	// 	   RSVP: this.props.bothArray[eventIndex].eventRsvp})

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

