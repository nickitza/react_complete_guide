import React from 'react'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import classes from './Person.css'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends React.Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount(){
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated)
  }
  render(){
    return(
      <Aux>
          {
          this.context.authenticated ? 
          <p>Authenticated!</p> 
          : 
          <p>Please Log In</p>
          }
        <p onClick={this.props.click} >I'm {this.props.name}, I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input 
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}/>
      </Aux>
    )
    // propTypes is a special property added to js object that React will watch out for in dev mode
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}
export default withClass(Person, classes.Person)