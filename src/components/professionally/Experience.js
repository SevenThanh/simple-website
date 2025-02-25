import React, { useState, useRef, useEffect } from 'react';
import '../../styles/professionally.css';


function Experience () {
    const [activeIndex, setActiveIndex] = useState(0);
    const companyRefs = useRef([]);
  
    const experiences = [
      {
        title: "Technical Lead Software Developer",
        company: "Stevens Blueprint",
        duration: "Dec 2023 - Present",
        responsibilities: [
          "Blueprint is an organization that utilizes technology to assist non-profits dedicated to supporting communities.",
          "Led a team of 6 student designers and engineers on pro-bono projects to create new brands, design systems, and websites for InReach.org (search this on Google to see our work). Implemented a CMS using Next.js, React, TinaCMS, enabling non-technical users to add, modify, and remove website content easily",
          "Directed the design and improvement of responsive user interfaces, utilizing HTML, Tailwind CSS, and React, attracting over 31,000 visitors and more than 38,000 page-views",
          "Currently, we’re working with NJ Appleseed to develop a platform that helps immigrants manage medical debt by providing guides, legal forms, and tools to challenge unfair charges and find assistance",
          "I also do resume-review sessions for over 40 members"
        ]
      },
      {
        title: "Fullstack Developer Intern",
        company: "Contentstack",
        duration: "Sep 2024 - Nov 2024",
        responsibilities: [
          "Worked with junior and senior engineers to build custom demos and sell them to businesses (e.g., MongoDB, Walmart, etc.)",
          "Engineered interactive demos with HTML, CSS, JavaScript, and React, creating reusable components that reduced demo creation time by 30% and increased client inquiries by 40%.",
          "Integrated RESTful and GraphQL APIs to showcase a headless CMS, enabling real-time features and refining the codebase with Jest tests and CI/CD pipelines, improving demo load speed by 25%."
        ]
      },
      {
        title: "Software Engineer Fellowship",
        company: "Headstarter AI",
        duration: "Jul 2024 - Sep 2024",
        responsibilities: [
          "Built AI projects and collaborate with a team of 3 to transform a startup's backlog into functional solutions that meet business requirements",
          "Participated in weekend hackathons and gain insights from CEOs of YC startups and senior software engineers at leading tech companies",
          "My work ranked in the top 1%, and it was so impressive that the CEO of Leafpress (YC S23) personally emailed me, inviting me to join as one of their founding engineers alongside MIT and Harvard engineers/students. Unfortunately had to turn down the offer due to the excessive time commitment.",
          <span>
            <a href="/proof.jpg" target="_blank" className="proof-link">Proof</a>
          </span>
        ]
      },
      {
        title: "Point72 Academy Insights Scholar",
        company: "Point72",
        duration: "May 2024 - Jun 2024",
        responsibilities: [
          "A selected program designed to educate students on hedge funds, investment banking, and research analysis" ,
          "Led by no other than the Head of Investment Professional Development at Point72, Jaimi Goodfriend"
        ]

      },
      {
        title: "Publication Assistant",
        company: "Stevens",
        duration: "Nov 2023 - May 2024",
        responsibilities: [
          "Collaborated with Dr. Normnal Horing to integrate written content, conduct proofreading, and provide technical support",
          "Utilized LaTeX to typeset complex mathematical content, including intricate notations, tables, and technical material for the his's book and research projects",
        ]
      },
      {
        title: "Software Developer Intern",
        company: "Inchtone Global",
        duration: "Jan 2024 - Apr 2024",
        responsibilities: [
          "Reduced user registration drop-offs by 60% by creating a streamlined React UI and Node.js/Express.js REST APIs. Improved registration response times by 50% through optimized MongoDB schemas and efficient indexing.",
          "Improved registration response times by 50% through optimized MongoDB schemas and efficient indexing.",
          "Built a support chatbot using React, Express.js, utilizing PyTorch to train an NLP model that automates responses to common user queries, reducing support tickets by 80% and accomplishing 5 stars user satisfaction rate."
        ]
      },
      {
        title: "Undergraduate Research Assistant",
        company: "Stevens",
        duration: "Mar 2024 - Jun 2024",
        responsibilities: [
          "To date, very few oral medications have been developed to treat COVID-19, highlighting the critical need for more oral treatments. Our research focused on discovering novel inhibitors for the SARS-CoV-2 main protease using AI/ML computational tools.",
          "Learned under Dr. Sunil Paliwal, my work involved using ML/AI computational tools such as Schrodinger to design new oral medicines for COVID-19 by molecular modeling, docking, and virtual screening."
        ]
      },
      {
        title: "Undergraduate Research Assistant",
        company: "Stevens",
        duration: "Oct 2023 - Mar 2024",
        responsibilities: [
          "Mentored under Dr. A. Emrah Bayrak, worked alongside PhD students to develop a multi-sensor wearable system with personalized AI and multimodal biofeedback, designed to enhance the movements of older adults at home",
          "Executed data processing tasks including cleaning and formatting with Python, and utilized SciPy, Numpy, Pandas for mathematical computation. Employed Keras to implement machine learning methods which improved in 30% accuracy"
        ]
      },
      {
        title:"Store Associate",
        company: "Walgreens",
        duration: "Sep 2023 - Dec 2023",
        responsibilities: [
          "Just a normal Walgreens worker :v"
        ]
      }
    ];
  
    useEffect(() => {
      const activeCompany = companyRefs.current[activeIndex];
      if (activeCompany) {
        const indicator = document.querySelector('.indicator');
        indicator.style.height = `${activeCompany.clientHeight}px`;
        indicator.style.top = `${activeCompany.offsetTop}px`;
      }
    }, [activeIndex]);
  
    return (
      <div className="experience-section">
        <h2 className="section-title">1. Work Experience</h2>
        <div className="experience-container">
          <div className="company-bar">
            {experiences.map((experience, index) => (
              <div
                key={index}
                ref={el => companyRefs.current[index] = el}
                className={`company-name ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {experience.company}
              </div>
            ))}
            <div className="indicator"></div>
          </div>
          <div className="experience-details">
            <h3 className="job-title">{experiences[activeIndex].title}</h3>
            <p className="duration">{experiences[activeIndex].duration}</p>
            <ul className="responsibilities">
              {experiences[activeIndex].responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div id="line"></div>
      </div>
    );
}

export default Experience;