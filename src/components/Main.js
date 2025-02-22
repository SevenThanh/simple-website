import '../styles/main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="main-wrapper">
      <div className="first-page">
        <h1>Hello there, I'm Johan Nguyen</h1>
        <p>
          I created this simple website for you to get to know me both{' '}
          <Link to="/professionally">professionally</Link> and{' '}
          <Link to="/personally">personally</Link> (preferably both because I think I'm pretty awesome 😊)
        </p>
      </div>
    </div>
  );
}

export default Main;