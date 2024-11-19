import React from "react";
import "./work.css";

const Work = () => (
  <article id="work" className="work-mf">
    <div class="container">
      <header>
        <h2>
          Here's an overview of my professional capabilities and contributions.
        </h2>
        <p>
          Exploring the fusion of technology and creativity to solve complex
          problems.
        </p>
      </header>
      <div class="row">
        <div class="col-4">
          <section class="box style1">
            <span class="icon featured fa-comments"></span>
            <h3>Dynamic Web Development</h3>
            <p>
              As a Full Stack Developer, I have developed two MERN stack projects focused on
              logistics: one for a container terminal and another for a fiscal warehouse. 
              While currently unemployed, I am developing a third project for a cleaning
              service company that manages appointments through a web application.
              This hands-on experience has kept me updated in both front-end and back-end
              technologies. Proficient in JavaScript, React.js, Node.js, and Express.js,
              I build responsive, dynamic web applications that deliver seamless user experiences.
            </p>
          </section>
        </div>
        <div class="col-4">
          <section class="box style1">
            <span class="icon solid featured fa-camera-retro"></span>
            <h3>Database Management & Design</h3>
            <p>
              I have strong skills in database technologies including MongoDB and MySQL,
              acquired through real-world projects and formal education. I excel in designing,
              implementing, and managing databases that support the back-end of web applications,
              ensuring data integrity and security. Additionally, I completed the "SQL and
              Relational Databases" course at Metropolia University of Applied Sciences in
              open university format.
            </p>
          </section>
        </div>
        <div class="col-4">
          <section class="box style1">
            <span class="icon featured fa-thumbs-up"></span>
            <h3>Software Development & Tools</h3>
            <p>
              I have a solid understanding of several programming languages and development tools,
              including Python, C++, JavaScript, Visual Studio Code, Git, and GitHub.
              My experience extends beyond the basics in these technologies, gained through
              both university courses and practical application in projects. Additionally,
              my background in cybersecurity principles from the Cisco Academy ensures that
              I always consider security in my development work.
            </p>
          </section>
        </div>
      </div>

    </div>
  </article>
);

export default Work;
