import React from 'react'
import './Person.css'
import Aux from '../../../hoc/Aux'


const Person = ( props ) => {
  return(
    <Aux>
      <p onClick={props.click} >I'm {props.name}, I'm {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </Aux>
    )
}

export default Person