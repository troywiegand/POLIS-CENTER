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

  componentWillMount(){
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

  descFormatter = (cell, row) =>{ 
    console.log(row)
    let modifiedCell={__html: cell}
    return <div dangerouslySetInnerHTML={modifiedCell}/>;

  }


  render() {
    return (
      <div className="EventList">

        <div style={style}>
        <BootstrapTable data={this.state.items} striped hover condensed  keyField='eventID' height='120px' search>
      <TableHeaderColumn dataField='eventTitle'> Name</TableHeaderColumn>
      <TableHeaderColumn dataFormat={this.descFormatter} dataField='eventDesc'>Description</TableHeaderColumn>
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



