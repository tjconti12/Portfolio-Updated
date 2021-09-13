import profilePic from '../../../resources/images/bwProfilePic.jpg';

import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme-container">
            <h2 className="aboutme-title">About Me</h2>
            <div className="aboutme-column-container">
                <div className="aboutme-profile-img-container">
                    <img className="aboutme-profile-img" src={profilePic} alt="Tyler Professional Pose" />
                </div>
                <h3 className="aboutme-occupation">Software Developer</h3>
                <p className="aboutme-brand-statement">I am a Software Developer with a background in Biology and Aviation. I work with others to collectively solve complex problems with creative solutions. I bring my passion for learning into each opportunity. My unique experience in teaching and leadership enables me to approach each project with a logical and empathetic perspective</p>
                <h3 className="aboutme-skills">Skills | Languages</h3>
                <ul className="aboutme-list-container">
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Javascript</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>ES2015+(ES6)</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>HTML5</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>React</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>React Hooks</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>React Native</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Bootstrap</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>CSS3</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Sass</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Mobile Design</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Node JS</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Express</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Python</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>NPM</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Yarn</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Jest</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Unit Testing</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Rest APIs</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Git</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Github</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>JSON</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>MongoDB</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>PostgreSQL</li>
                    <li className="aboutme-list-item"><span className="aboutme-list-style">•</span>Photoshop</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe