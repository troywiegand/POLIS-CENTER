import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {NavLink} from 'react-router-dom'


class EventList extends Component {
 
  descFormatter = (cell, row) => {
    let modifiedCell = { __html: cell }
    return <div dangerouslySetInnerHTML={modifiedCell} />
  }

  nameFormatter = (cell, row) => {
    if (row.eventPicture !== "") {
      let url = 'http://www.spiritandplace.org' + row.eventPicture
      return (
        <div>
          <NavLink to={`/Event/${row.eventId}/${row.eventTitle}`} >
          <h3> {row.eventTitle} </h3>
          </NavLink>
          <img src={url} alt="etc" height="168" width="168" />
        </div>)

    }
console.log(`/Event/${row.eventId}/${row.eventTitle}`)
    return  <NavLink to={`/Event/${row.eventId}/${row.eventTitle}`}>
    <h3> {row.eventTitle} </h3>
    </NavLink>
  }


  render() {
    return (
      <div className="EventList">

        <div style={style}>
          <BootstrapTable data={this.props.items} striped hover condensed keyField='eventID' height='120px' search>
            <TableHeaderColumn dataFormat={this.nameFormatter} dataField='eventTitle' > Name</TableHeaderColumn>
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



