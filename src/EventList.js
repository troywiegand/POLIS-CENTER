import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { NavLink } from 'react-router-dom'

import './EventList.css'

class EventList extends Component {

  constructor(props){
    super(props)
    this.state={defaultPicture: "https://pbs.twimg.com/profile_images/301603347/sap-twitter.gif"}
  }

  //Processes the decription to dangerously inject the HTML
  descFormatter = (cell, row) => {
    let modifiedCell = { __html: cell }
    return <div dangerouslySetInnerHTML={modifiedCell} />
  }

  //Name Formatter will add the picture into the title for the events with pictures.
  nameFormatter = (cell, row) => {
    if (row.eventPicture !== "") {
      let url = 'http://www.spiritandplace.org' + row.eventPicture
      return (
        <div>
          <NavLink to={`/Event/${row.eventId}/${row.eventTitle}`} >
            <h3> {row.eventTitle} </h3>
          </NavLink>
          <img src={url} alt=" " height="175vmin" width="200vmin" />
        </div>)

    }else{
      return <NavLink to={`/Event/${row.eventId}/${row.eventTitle}`}>
      <h3> {row.eventTitle} </h3>
      <img src={this.state.defaultPicture} alt=" " height="175vmin" width="200vmin" />
    </NavLink>
   }  
  }

  render() {
    return (
      <div className="EventList">
        {/* This Bootstrap table is powerful  */}
        <div style={style}>
          <BootstrapTable data={this.props.bothArray} striped hover condensed key='eventID' keyField='eventID' height='120px' search>
            <TableHeaderColumn dataSort={true} dataFormat={this.nameFormatter} dataField='eventTitle' > Name</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='startDate'> Date </TableHeaderColumn>
            <TableHeaderColumn dataField='startTime'> Time </TableHeaderColumn>
            <TableHeaderColumn dataFormat={this.descFormatter} dataField='eventDesc'>Description</TableHeaderColumn>
          </BootstrapTable>
        </div>

      </div>
    );
  }
}

const style = {
  textAlign: 'center',
  margin: 'auto'
}

export default EventList;



