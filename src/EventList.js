import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {NavLink} from 'react-router-dom'


class EventList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentWillMount() {
    fetch("http://in-polis-app27.ads.iu.edu/SpiritAPI/API/Spirit/Events")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          })
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  descFormatter = (cell, row) => {
    let modifiedCell = { __html: cell }
    return <div dangerouslySetInnerHTML={modifiedCell} />
  }

  nameFormatter = (cell, row) => {
    if (row.eventPicture !== "") {
      let url = 'http://www.spiritandplace.org' + row.eventPicture
      return (
        <div>
          <NavLink to={`/Event/${row.eventTitle}`} >
          <h3> {row.eventTitle} </h3>
          </NavLink>
          <img src={url} alt="etc" height="168" width="168" />
        </div>)

    }

    return  <NavLink to={`/Event/${row.eventTitle}`} >
    <h3> {row.eventTitle} </h3>
    </NavLink>
  }


  render() {
    return (
      <div className="EventList">

        <div style={style}>
          <BootstrapTable data={this.state.items} striped hover condensed keyField='eventID' height='120px' search>
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



