import Aboutme from "./Aboutme";
import Hobbies from "./Hobbies";
import Why from "./Why";

function Personally() {
    return (
      <div className="content-section">
        <Aboutme/>
        <Hobbies />
        <Why/>
      </div>
    );
  }
  
export default Personally;