import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Nicki", age: 33 },
      { name: "Eric", age: 34 },
      { name: "Sarah", age: 8 }
    ],
    otherState: 'something else',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const toggled = this.state.showPersons;
    this.setState({showPersons: !toggled})
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid purple',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>Hobby: Napping</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      )
    }
    return (
      <div className="App">
      <button
        style={style}
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
