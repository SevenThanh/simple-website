import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Exam from './Exam';

import { Link } from 'react-router-dom'; 
function Professionally() {
  return (
    <div>
      <Link to="/personally" className="nav-button">
        View Personal Side
      </Link>
      <Experience />
      <Projects />
      <Exam />
    </div>
  );
}

export default Professionally;