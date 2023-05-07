//component that return the photo, fullname, bio, profession and button to check the fullname
//importation of the components to use
import React from 'react'
import Bio from './components/Bio'
import FullName from './components/FullName'
import Profession from './components/Profession'
import ProfilePhoto from './components/ProfilePhoto'
import ActionAlert from './components/ActionAlert'

//arrow function 
const Profile = (props) => {
  //inline style for the component
  const styleTop={paddingTop:20,height:150, width:350,backgroundImage:"url(/bg-pattern-card.svg",backgroundZise:"cover",borderTopLeftRadius:25,borderTopRightRadius:25}
  const styleCartProfile={height:500,backgroundColor:"#527e8d",borderRadius:25,boxShadow:"0px 10px 10px 5px #99a03f"}
  const styleFullName={marginTop:80,marginBottom:20}
  const styleBio = {marginTop:30, width:300,height:100, fontSize:17,color:"rgb(226, 230, 43)"}
  //object of data to use : fullname, bio1, bio2, bio3, profession and the profile photo
  const {fullName="Mohamed Beji",bio1="Front End Developper",bio2="Back End Developper",bio3="Full Stack Developper",proffession="An accounter",profPhoto="./beji.png"}=props

  return (
    <div style={styleCartProfile} classeName="cartProfile">
    <div style={styleTop} classeName="photo_profile">
    <ProfilePhoto  fullName={fullName}>{profPhoto}</ProfilePhoto>
    </div>
     <div style={styleFullName} classeName="fullName">
      <FullName fullName={fullName}></FullName>
      </div>
      <div style={styleBio} classeName="bio">
      <Bio bio1={bio1} bio2={bio2} bio3={bio3}></Bio>
      </div>
      <div classeName="proffession">
      <Profession proffession={proffession}></Profession>
      </div>
      <ActionAlert fullName={fullName}></ActionAlert>
    </div>
  )
}
// const [first,setFirst]=useState(0)
// const [show,setShow]=useState(true)
// const styleButon={width:100,height:50}

// console.log(useState)
// return (
//   <div>
//   <Loader/>
//   // {show && <h1>HELLO</h1>}
//   //  <button style={styleButon} onClick={()=>setFirst(first+1)}>{first}</button>
//   //  <button onClick={()=>{setShow(!show)}}>show me</button>

//exportation the component
export default Profile
