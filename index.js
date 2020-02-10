import React, { Component } from 'react'
import RenderDOM from 'react-dom'
import Profile from './Profile'

const EmployeeDirectory = [
  {
    id: 1,
    name: 'Nagesh Kumar',
    designation: 'Web Designer'
  },
  {
    id: 2,
    name: 'Pranav Aditya Kumar',
    designation: 'UI/ UX Designer'
  },
  {
    id: 3,
    name: 'Mahesh Kumar',
    designation: 'Front End Developer'
  },
  {
    id: 4,
    name: 'Aruna Kumari',
    designation: 'UI Developer'
  },
  {
    id: 5,
    name: 'Bhanu Prakash',
    designation: 'Graphic Designer'
  },
]

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      employees: EmployeeDirectory,
      employeeOfTheMonth : 0
    }
  }

  setEmployeeOfTheMonth = (employeeID) => {
    this.setState({
      employeeOfTheMonth: employeeID
    })
  }

  render(){
    return(
      <div>
        <h1>Parent Method in Child Component</h1>
        <ul>
          {
            this.state.employees.map((emp) =>{
                console.log(emp)
                return ( <li key={emp.id}> { 
                  <div style={{ backgroundColor: emp.id === this.state.employeeOfTheMonth ? 'yellow' : 'white' }}>
                    <Profile 
                    name={emp.name}
                    id={emp.id} 
                    designation={emp.designation} 
                    setEmployeeOfTheMonth={this.setEmployeeOfTheMonth}  />
                  </div>
                   } </li> )
              })
          }
        </ul>     
      </div>
    )
  }
}

RenderDOM.render(<App />, document.getElementById('root'))