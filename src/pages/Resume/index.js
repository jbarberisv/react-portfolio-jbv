import { useEffect, useState } from 'react';
import resume from './resume.pdf';



export default function Resume() {
  const [about, setAbout] = useState('');



  return (
    <section id="resume" className="content-section">
      <div className="title">
        <h2>Resume</h2>
      </div>

      <div >
     
        <h2>Summary:</h2>
        <hr />
        <p>Enthusiastic and dedicated web developer with comprehensive training from a Coding Boot Camp, encompassing three distinct phases—Foundation, Technical, and Performance. Experienced in building client-side and full-stack web applications while leveraging cutting-edge tools and technologies. Eager to contribute a solid foundation in web development, a knack for creative problem-solving, and a passion for continuous learning to a dynamic development team.</p>

        <h2>Education:</h2>
        <p>Coding Boot Camp, UCF BootCamp.
            - Gained proficiency in web development through intensive coursework and hands-on projects.
            - Developed skills in both front-end and back-end technologies, working collaboratively in Agile environments.
            - Successfully completed three comprehensive projects, including a dynamic single-page application using the MERN stack.</p>

        <h2>Skills:</h2>
        <hr />

        <ul>
            <li>Front-End Development:
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>DOM Manipulation</li>
                    <li>APIs and AJAX</li>
                    <li>JSON</li>
                </ul>
            </li>
            <li>Back-End Development:
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Object-oriented programming (OOP)</li>
                    <li>MySQL and Sequelize</li>
                    <li>MVC architecture</li>
                    <li>RESTful APIs</li>
                    <li>Testing and Debugging</li>
                </ul>
            </li>
            <li>Full-Stack Development:
                <ul>
                    <li>MERN Stack (MongoDB, Express, React, Node)</li>
                    <li>NoSQL databases</li>
                    <li>Progressive Web Apps (PWAs)</li>
                    <li>Computer Science Fundamentals</li>
                    <li>Agile Development Methodology</li>
                </ul>
            </li>

        </ul>

        <h2>Projects:</h2>
        <hr />

        <p>Project 1: Client-Side Application
            - Utilized HTML, CSS, and JavaScript to build a responsive client-side application.
            - Integrated third-party APIs to enhance application functionality.
            - Demonstrated effective teamwork and communication within an Agile development environment.</p>

        <p>Project 2: Full-Stack Web Application
            - Engineered a full-stack web application using Node.js, Express, and MySQL.
            - Implemented MVC architecture and Sequelize ORM for efficient data management.
            - Collaborated with team members to meet project milestones and deadlines.</p>

        <p>Project 3: Dynamic Single-Page Application (MERN Stack)
            - Designed and developed a dynamic single-page application using the MERN stack.
            - Created a seamless user experience by implementing NoSQL databases and RESTful APIs.
            - Presented the final project with a compelling demonstration and storytelling approach.</p>

        <h2>Personal Traits:</h2>
        <hr />

        <ul>
            <li>Curious and Quick Learner</li>
            <li>Detail-Oriented</li>
            <li>Strong Analytical Skills</li>
            <li>Adaptability and Flexibility</li>
            <li>Passionate about Problem-Solving</li>
            <li>Effective Communicator</li>
        </ul>

        <p>References available upon request.</p>

      </div>

      <div className="resume-download">
        <a href={resume} download className="download-link">
            Download Resume
        </a>
      </div>

    </section>
  );
}

