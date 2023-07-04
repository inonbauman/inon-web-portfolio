import React from 'react';
import './AboutMe.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import the prism css styling
import { FaGithub, FaLinkedin } from 'react-icons/fa';

class AboutMe extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div id="about" className="about-me-container">
                <div className="about-me-info">
                    <h2>About me</h2>
                    <pre>
                        <code className="language-javascript">
                            {`let me = {
    name: "Inon Bauman",
    code: ["html", "css", "JavaScript", "Node.js"],
    web: ["React", "Express.js"],
    devops: ["Git", "GitHub"]
}`}
                        </code>
                    </pre>
                </div>
                <div className="developer-info">
                    <h1>Hi, I'm</h1>
                    <h2>Inon Bauman</h2>
                    <h3>Full Stack Web Developer</h3>
                    <p>
                        Knowledgeable in development methodologies and experience working in a team, 
                        quick learner and creative thinker, enthusiastic, organized and committed. 
                        With two and a half years of experience in high-tech companies. 
                        Graduated from a 6-month Full-Stack course with a main focus on - JavaScript and React
                    </p>
                    <p>Now I am looking for more experience in my field.</p>
                    <div className="social-links">
                        <a href="https://github.com/yourGithubUsername" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/yourLinkedInUsername/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
