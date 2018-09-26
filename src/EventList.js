import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



class EventList extends Component {
  render() {
    return (
      <div className="EventList">

        <h2 >Put a Table here!</h2>
        <div style={style}>
        <BootstrapTable data={this.props.fakeData} striped hover condensed  height='120px'>
      <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'> Name</TableHeaderColumn>
      <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
      </BootstrapTable>
        </div>
       



      </div>
    );
  }
}

const style={
  textAlign: 'center',
  margin: 'auto'
}

export default EventList;



