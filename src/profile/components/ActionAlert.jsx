// component for the alert
//importation of components
import React from 'react'
import ActionUser from './ActionUser'
import swal from 'sweetalert';
import PropTypes from "prop-types"
// main of the function that render an alert that contain the full Name 
const ActionAlert=(props)=>{
   // default value of fullName
  const { fullName= "The fullName" } = props;
    const handleName=e=>{
        e.preventDefault()
        swal("Good job!", fullName, "success");
    }
  return (
    <ActionUser handleName={handleName}/>
  )
}
//prop types
ActionAlert.propTypes = {
  handelName: PropTypes.func,
}
//exportation of the component
export default ActionAlert
