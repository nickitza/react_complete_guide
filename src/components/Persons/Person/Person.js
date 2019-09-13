import React from 'react'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import classes from './Person.css'
import PropTypes from 'prop-types'


const Person = ( props ) => {
  return(
    <Aux>
      <p onClick={props.click} >I'm {props.name}, I'm {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </Aux>
    )
}
// propTypes is a special property added to js object that React will watch out for in dev mode
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person)