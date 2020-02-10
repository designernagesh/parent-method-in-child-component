import React, { Component } from 'react'

class Profile extends Component{
  handleSetEmployeeOfTheMonth = () =>{
    this.props.setEmployeeOfTheMonth(this.props.id)
  }
  render(){
    return(
      <>
        <h2>{this.props.name}</h2>
        <h3>{this.props.designation}</h3>
        <button onClick={this.handleSetEmployeeOfTheMonth}>Set {this.props.name} as Employee of the Month</button>
      </>
    )
  }
}

export default Profile

