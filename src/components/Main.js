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
          <Link to="/personally">personally</Link> (preferably both because I think I'm pretty awesome sauce😊)
        </p>
        <p>
        I’d like to sincerely thank Dr. Jason Rabinovitch, Dr. Virginia Con, and Dr. Philippe Meunier for agreeing to write me a letter of recommendation. 
        </p>
        <p>
        To you, it may just be a letter, but to me, it’s a chance to build a brighter future—one where I can help my grandma with her cancer treatment, 
        support my mom with her rent, assist my relatives in Vietnam with their farming work, and give kids in underprivileged areas access to the education they deserve.
        </p>
        <div className="first-page-imgages">
            <img src="cat1.JPG" alt="First placeholder" />
            <img src="cat2.JPG" alt="Second placeholder" />
            <img src="cat3.jpg" alt="Third placeholder" />
        </div>
        <p className='cat'> Top 3 Cats of All Time</p>
      </div>
    </div>
  );
}

export default Main;