//component for the full name
//importation of the component
import React from 'react'
import PropTypes from "prop-types";
//the main arrow function that use props to render tu fullname
const FullName = (props) => {
  // default value of fullName
 const { fullName= "The fullName" } = props;
  return (
    <h2>{fullName}</h2>
  )
}
//prop
FullName.propTypes = {
  fullName: PropTypes.string
}

//exportation of the component
export default FullName
