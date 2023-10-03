import React from 'react';
import resume from '../../assets/JoshuaHebertResume2023.pdf';
import './Resume.css';

const Resume = () => {
  const frontendSkills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Vue.js',
    // Add more frontend skills
  ];
 
  const backendSkills = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST API',
    // Add more backend skills
  ];
 
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="buttons">
        {/* Add a link to your PDF resume */}
        <a
          href={resume}
          target="_blank"
          className="resume-link" rel="noreferrer">Download Resume (PDF)
        </a>
      </div>
      <div className="skill-card">
        <h3>Frontend Skills</h3>
        <ul>
          {frontendSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="skill-card">
        <h3>Backend Skills</h3>
        <ul>
          {backendSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
     </div>
    </section>
  );
};

export default Resume;