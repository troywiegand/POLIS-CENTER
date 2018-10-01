import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



class EventList extends Component {
  constructor(props){
    super(props)
    this.state={
      error:null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount(){
    fetch("http://in-polis-app27.ads.iu.edu/SpiritAPI/API/Spirit/Events")
    .then(res => res.json())
    .then(
      (result)=>{
        this.setState({
          isLoaded: true,
          items: result
        })
      },

      (error)=>{
        this.setState({
          isLoaded:true,
          error
        })
      }
    )
  }


  render() {
    return (
      <div className="EventList">

        <h2 >Put a Table here!</h2>
        <div style={style}>
        <BootstrapTable data={this.state.items} striped hover condensed  height='120px'>
      <TableHeaderColumn isKey dataField='eventId'>ID</TableHeaderColumn>
      <TableHeaderColumn dataField='eventTitle'> Name</TableHeaderColumn>
      <TableHeaderColumn dataField='eventDesc'>Description</TableHeaderColumn>
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



