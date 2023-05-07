//the comonent that return the profession
import React from 'react'
import PropTypes from "prop-types";
const Profession = (props) => {
  // default value of profession
 const { proffession= "The proffession" } = props;
  return (
<h4>{proffession}</h4>
  )
}
//prop types
Profession.propTypes = {
  proffession: PropTypes.string,
  
}
//exportation of the component
export default Profession
