//the main component that return app the index.
//importation of css file and the profile component
import './App.css';
import Profile from './profile/Profile';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Loader from './profile/components/Loader';


//the arrow function
function App(props) {
  const [show,setShow]=useState(false)
  const [isLoad,setIsLoad]=useState(true)
  const interval=setInterval(()=>{setIsLoad(!isLoad);},7000)



  return (
    <div className="App">
      <main className="App-header"> 
      
      <div className="theLeft">

     {(interval<2)? isLoad && <Loader></Loader>:<Button onClick={()=>setShow(!show)} className="submitname" variant="primary">{!show?"Show":"Hide"}</Button>}
     
</div>
      {show && <div className="theCenter">
      <Profile></Profile>
      
      </div>
  }
      </main>
    </div>
  );
}
//exportation of the app
export default App;
