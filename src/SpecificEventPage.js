import React, { Component } from 'react';

class SpecificEventPage extends Component {
constructor(props){
  super(props)

 let eventNumb= this.props.location.pathname.slice(7,8)
 let eventIndex= parseInt(eventNumb, 10)-2
 this.state={eventIndex,Header: "Header",PresenterList: ""}
 this.props.loadAPI()
}

componentWillReceiveProps(){
  //This gets the title of the event from this.props.items
  let eventNumb= this.props.location.pathname.slice(7,8)
  if(this.props.items[this.state.eventIndex]!==undefined)
    this.setState({Header: this.props.items[this.state.eventIndex].eventTitle})

    //This part isn't really working
  if(this.props.presenters!==undefined)
    this.props.presenters.map((presenter)=>{
      if(presenter.eventId===eventNumb)
        this.setState({PresenterList: this.state.PresenterList+presenter.lastName})
        return null
    })
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
    </h3>
      </div>
    );
  }
}

export default SpecificEventPage;

