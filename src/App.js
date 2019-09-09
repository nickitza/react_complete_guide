import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {id: 1, name: "Nicki", age: 33 },
      {id: 2, name: "Eric", age: 34 },
      {id: 3, name: "Sarah", age: 8 },
      {id: 4, name: "Spike", age: 31}
    ],
    otherState: 'something else',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const toggled = this.state.showPersons;
    this.setState({showPersons: !toggled})
  }

  deletePersonHandler = (index) => {
    //this is a new array, not a reference to the original persons array
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons: persons})
  }

  render(){
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid orange',
      padding: '10px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key = { person.id }
              click={()=>this.deletePersonHandler(index)} 
              name={ person.name } 
              age={ person.age }/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
      <button
        style={buttonStyle}
        //show or hide person components
        onClick={this.togglePersonsHandler}
        >
        Show People
      </button>
      {persons}
      

    </div>
    );
  }
}

export default App;
