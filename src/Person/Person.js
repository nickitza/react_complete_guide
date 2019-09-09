import React from 'react'
import './Person.css'

const Person = ( props ) => {
  return(
    <div className="Person">
      <p>I'm {props.name}, I'm {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default Person