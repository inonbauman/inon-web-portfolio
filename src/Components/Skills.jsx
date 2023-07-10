import React, { useState, useEffect } from 'react';
import { FaPython, FaJs, FaBootstrap, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [currentSkills, setCurrentSkills] = useState([0, 1]);

  const skills = [
    { logo: <FaPython />, name: 'Python' },
    { logo: <FaJs />, name: 'JavaScript' },
    { logo: <FaBootstrap />, name: 'Bootstrap' },
    { logo: <FaDatabase />, name: 'SQL' },
    { logo: <FaReact />, name: 'React.js' },
    { logo: <FaNodeJs />, name: 'Node.js' },
    { logo: <FaDatabase />, name: 'Express.js' },
    { logo: <SiMongodb />, name: 'MongoDB' },
    { logo: <DiVisualstudio />, name: 'Visual Studio Code' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkills([(currentSkills[0] + 2) % skills.length, (currentSkills[1] + 2) % skills.length]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSkills]);

  return (
    <div className="skills-container">
      <div className="skill">
        {skills[currentSkills[0]].logo}
        <p>{skills[currentSkills[0]].name}</p>
      </div>
      <div className="skill">
        {skills[currentSkills[1]].logo}
        <p>{skills[currentSkills[1]].name}</p>
      </div>
    </div>
  );
};

export default Skills;
