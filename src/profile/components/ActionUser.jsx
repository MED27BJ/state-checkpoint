// Component that use handleClick as props and render a button that execute the alert
//importation of the component
import React from 'react'
import Button from 'react-bootstrap/Button'
const ActionUser = ({handleName}) => {
  return (
    
    <Button onClick={e=>handleName(e)} variant="info">CHECK</Button>
  )
}
//exportation of the component
export default ActionUser
