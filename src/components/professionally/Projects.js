import React from 'react';
import '../../styles/projects.css'

const ProjectData = [
  {
  id: 1,
  title: "Code With Ducks",
  description: [
    <div  className='cwd-description'>
      <ul>
        <li>
        A program I created for underrepresented high school students to learn Python, Machine Learning, and AI Research as part of STEP (Student Development & Enrichment Programs).
        </li>
        <li>
        Developed 60+ pages of curriculum and the program website using JSX, CSS, React, reviewed and approved by Dr. Rabinovitch (ex-NASA) and Dr. Koskinen (ex-Amazon, IBM Research)
        </li>
      </ul>
    </div>
  ],
  img: '/cwd.png',
  tags: ['React', 'JSX', 'CSS'],
  source: 'https://github.com/SevenThanh/Code-With-Ducks'
  },
  {
  id: 2,
  title: 'EngBot',
  description: [
    <div  className='engbot-description'>
      <ul>
        <li>
        A platform that uses AI to provide English lessons tailored to the user's background and experience.
        </li>
        <li>
        For example, if the user is a high school student, they will receive lessons relevant to their daily life, such as how to ask to use the bathroom, request a homework extension, make friends, and more.
        </li>
        <li>
        Currently unable to work on this due to limited technical knowledge :(    
        </li>
      </ul>
    </div>
],
  img: '/Engbot.png',
  tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  source: 'https://github.com/SevenThanh/EngBot',
  visit: ''
  },
  {
  id: 3, 
  title: 'LoginAndTalk',
  description: "A super fast, modern real-time chat application featuring advanced functionalities including light/dark mode, notification sounds, satisfying typing effects, responsive UI design and many more.",
  img: '/loginandtalk.png',
  tags: ['React', 'Typescript', 'Tailwind CSS', 'Next.js', 'Redis'],
  source: 'https://github.com/SevenThanh/LoginAndTalk',
  visit: ''
  }
];


function Projects() {
  return (
    <section className='project-section'>
      <div>
        <h2>2. Projects</h2>
        <ol>
          {ProjectData.map((project) => (
            <li key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{`${project.id}. ${project.title}`}</h3>
                <p>{project.description}</p>
                <a href={project.source}>View Code</a>
                <h4>{project.tags.join(', ')}</h4>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


export default Projects;
