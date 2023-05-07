// components for loading
import Spinner from 'react-bootstrap/Spinner';
//main function for a spinner
function Loader() {
  const styleDisplay="block"
const styleLoad={color: "#246ecf",display:styleDisplay};
const styleSpinner={ animationDuration: "3000ms"}
  return (
    <div style={styleLoad}>
      <Spinner animation="border" variant="primary" style={styleSpinner} />Loading...
      
    </div>
  );
}
//exportaion
export default Loader;