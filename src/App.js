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

  nameChangedHandler = (event, id) => {
    //find element in array and get index of that element
    //takes function as input and executes it on every element in array (like map)
    //returns a boolean if it's the el we're looking for
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    //objects and arrays are reference types
    //create new object, spread new object so as to not mutate the original state array
    const person = {
      ...this.state.persons[personIndex]
    }
    //changing the name of the particular person to the value in the input to the copied array
    person.name = event.target.value;
    //copy of old array
    const persons = [...this.state.persons]
    //updated person into copy of array
    persons[personIndex] = person
    //finally can update state
    this.setState( { persons: persons } )

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
              age={ person.age }
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
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
