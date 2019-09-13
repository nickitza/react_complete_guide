import React, {useEffect, useRef} from 'react'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    toggleButtonRef.current.click()
  }, [])

  const assignedClasses = []
  let btnClass = ''
  if (props.showPersons){
    btnClass = classes.coral
  }

  if(props.personsLength <= 2){
    assignedClasses.push(classes.coral);
  }
  if(props.personsLength <=1){
    assignedClasses.push(classes.bold)
  } 
  return(
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>Hello! This is the Persons App!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  )
}

export default React.memo(Cockpit)