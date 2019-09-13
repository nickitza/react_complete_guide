import React, {useEffect, useRef, useContext} from 'react'
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext)

  console.log(authContext.authenticated)

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
      <button onClick={authContext.login}>Log In</button>
    </div>
  )
}

export default React.memo(Cockpit)