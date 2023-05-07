//component that return the profile photo if there is not a photo return the first letter of the fullname
import React from 'react'
import PropTypes from "prop-types";

function ProfilePhoto (props){
  // inline style of the photo or the letter
    const stylePhoto={paddingBottom:20,marginTop:30,width:180, height:150, borderRadius:"50%", border:"10px solid #ffffff",fontFamily:"Fira Sans",color:"rgb(226, 230, 43)",display:"block",fontSize:100,alignItems: "center",textAlign:"center",justifyContent: "center" ,fontWeight:800,overflow:"hidden"}
   const styleDivPhoto={marginLeft:"20%"}
   //default props
    const { fullName="" } = props;
    //return profile photo as children
    return (
      <div style={styleDivPhoto}>
   <img style={stylePhoto} src={props.children} alt ={fullName[0]}/>
   </div>
  )
}
//prop types
ProfilePhoto.propTypes = {
  fullName: PropTypes.string,
  
}
//exporation of the component
export default ProfilePhoto
