import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function AboutMe() {
    // Code to be displayed
    let initialCode = [
        'let me = {',
        '    name: "Inon Bauman",',
        '    age: 23,',
        '    code: [ "JavaScript", "Python", "C++"],',
        '    web: ["HTML", "CSS", "Node.js", "Express.js", "React.JS"],',
        '    devops: ["Git", "GitHub"],',
        '    database: ["SQL", "MongoDB"]',
        '}'
    ];
    initialCode = initialCode.join('\n').split('');
    const [code, setCode] = useState([initialCode[0]]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        let timer = setTimeout(() => {
            if (code.length < initialCode.length) {
                setCode([...code, initialCode[code.length]]);
            }
        }, 50);  // Change the timeout as per your needs
        Prism.highlightAll();
        return () => clearTimeout(timer);
    }, [code]);

    return (
        <div id="about" className="about-me-container">
            {/* Container for code display */}
            <div className="about-me-info">
                <pre>
                    <code className="language-javascript">
                        {code.join('')}
                    </code>
                </pre>
            </div>
            {/* Container for developer information */}
            <div className="developer-info">
                <h1>Hi, I'm</h1>
                <h2>Inon Bauman</h2>
                <h3>Full Stack Web Developer</h3>
                <p>
                    Knowledgeable in development methodologies and experience working in a team, 
                    quick learner and creative thinker, enthusiastic, organized, and committed. 
                    With two and a half years of experience in high-tech companies. 
                    Graduated from a 6-month Full-Stack course with a main focus on - JavaScript and React.
                </p>
                <p>Now I am looking for more experience in my field.</p>
                {/* Social links */}
                <div className="social-links">
                    <a href="mailto:InonBauman@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope size={30} style={{ margin: '0 10px' }}/>
                    </a>
                    <a href="https://github.com/inonbauman/" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{ margin: '0 10px' }}/>
                    </a>
                    <a href="https://www.linkedin.com/in/inon-bauman/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{ margin: '0 10px' }}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
