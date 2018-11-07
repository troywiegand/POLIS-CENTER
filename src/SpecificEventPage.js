import React, { Component } from 'react';

import './SpecificEventPage.css'

class SpecificEventPage extends Component {
  constructor(props) {
    super(props)

    let eventNumb = this.props.location.pathname.slice(7, 8)

      if(this.props.location.pathname.slice(8, 9)!=="/")
      eventNumb +=this.props.location.pathname.slice(8, 9)

      if(this.thirdDigitCheck())
        eventNumb +=this.props.location.pathname.slice(9, 10)

    let eventIndex = parseInt(eventNumb, 10) - 2
    console.log(eventIndex)
    this.state = { eventIndex, Header: "Header", PresenterList: "", items: [], bothArray: [], update: false }
    this.loadAPI()
  }

  thirdDigitCheck = ()=>{
  const NUMB = parseInt(this.props.location.pathname.slice(9, 10))  
    switch(NUMB){
      case 0:
      case 1:
      case 2:
      case 3: 
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      return true;
      default:
      return false;
    }

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
          this.setState({ update: true })

        }
      )
      .then(
        () => {
          console.log(this.state.bothArray)
          this.updateInfo()
        }
      )
  }

  componentWillMount() {
    this.loadAPI()
  }

  updateInfo() {
    //This gets the title of the event from this.props.items

    if (this.state.bothArray[this.state.eventIndex] !== undefined && this.state.update) {
      this.setState({
        Header: this.state.bothArray[this.state.eventIndex].eventTitle,
        PresenterList: this.state.bothArray[this.state.eventIndex].PresenterList,
        StartDate: this.state.bothArray[this.state.eventIndex].startDate,
        EndDate: this.state.bothArray[this.state.eventIndex].endDate,
        StartTime: this.state.bothArray[this.state.eventIndex].startTime,
        EndTime: this.state.bothArray[this.state.eventIndex].endTime,
        RSVP: this.state.bothArray[this.state.eventIndex].eventRsvp,
        Desc: this.state.bothArray[this.state.eventIndex].eventDesc,
        Venue: this.state.bothArray[this.state.eventIndex].venueName,
        ZIP: this.state.bothArray[this.state.eventIndex].zip,
        Address: this.state.bothArray[this.state.eventIndex].address
      })
    }
    console.log(this.state.Desc)
  }


  render() {
	let startDate = this.state.StartDate !== undefined ? <p> Start Date: {this.state.StartDate} </p> : <div></div> 
	let address = this.state.Address !== undefined ? <p> Address: {this.state.Address} </p> : <div></div>
	let startTime = this.state.StartTime !== undefined ? <p> Start Time: {this.state.StartTime} </p> : <div></div>
    let endDate = this.state.EndDate !== undefined ? <p> End Date: {this.state.EndDate} </p> : <div></div>
    let endTime = this.state.EndTime !== undefined ? <p> End Time: {this.state.EndTime} </p> : <div></div>
    let venue = this.state.Venue !== undefined ? <p> Venue: {this.state.Venue} </p> : <div></div>
    let zip = this.state.ZIP !== undefined ? <p> ZIP: {this.state.ZIP} </p> : <div></div>
    let rsvp = this.state.RSVP !== undefined ? <a href={this.state.RSVP}>RSVP Here! </a> : <div></div>
    let PresenterList = this.state.PresenterList !== undefined
      ? <h2> Presenter List: {this.state.PresenterList} </h2>
      : <div />
    let desc = this.state.Desc !== undefined ?  <div dangerouslySetInnerHTML={{ __html: this.state.Desc }} /> : <div></div>
    return (
      <div className="SpecificEventPage">
        <h1>
          {this.state.Header}
        </h1>
        {PresenterList}
        <h3>
          {startDate}
          {startTime}
          {endDate}
          {endTime}
          {venue}
          {zip}
          {address}
		  {rsvp}
		  {desc}
        </h3>
      </div>
    );
  }
}

export default SpecificEventPage;

