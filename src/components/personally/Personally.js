import Aboutme from "./Aboutme";
import Hobbies from "./Hobbies";
import Why from "./Why";
import '../../styles/navigation.css'
import { Link } from 'react-router-dom'; 

function Personally() {
    return (
      <div className="content-section">
      <Link to="/professionally" className="nav-button">
        View Professional Side
      </Link>
        <Aboutme/>
        <Hobbies />
        <Why/>
      </div>
    );
  }
  
export default Personally;