// component that contain the information of the bio
// importation of the component
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from "prop-types"
// using carousel from bootstrap with some modification 
const Bio = (props) => {
// default value of the bio
const {bio1= "The first",bio2="The second",bio3="The third" } = props;
return (
  <Carousel variant="dark">
    <Carousel.Item>
    <h5>{bio1}</h5>
    </Carousel.Item>
    <Carousel.Item>
    <h5>{bio2}</h5>
    </Carousel.Item>
    <Carousel.Item>
    <h5>{bio3}</h5>
    </Carousel.Item>
  </Carousel>
);
}
//prop types
Bio.propTypes = {
  bio1: PropTypes.string,
  bio2: PropTypes.string,
  bio3: PropTypes.string,
}

//exportation of the component
export default Bio
