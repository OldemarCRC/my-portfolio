import React from "react";
import "./work.css";

const Work = () => (
  <article id="work" className="work-mf">
    <div class="container">
      <header>
        <h2>
          Here's an overview of my learning journey and practical projects.
        </h2>
        <p>
          Combining logistics expertise with emerging software
          development skills to create practical solutions.
        </p>
      </header>
      <div class="row">
        <div class="col-4">
          <section class="box style1">
            <span class="icon featured fa-comments"></span>
            <h3>Full Stack Web Development</h3>
            <p>
              As a recent ICT graduate, I have built three MERN stack applications
              to practice and consolidate my learning: a container terminal management
              system, a fiscal warehouse application, and a cleaning service appointment
              platform. These projects combine my logistics background with programming
              fundamentals learned at Varia, leveraging modern development tools,
              AI assistants, online resources, and GitHub repositories. All applications
              are deployed on Render, demonstrating hands-on experience with React.js,
              Node.js, Express.js, and MongoDB.
            </p>
          </section>
        </div>
        <div class="col-4">
          <section class="box style1">
            <span class="icon solid featured fa-camera-retro"></span>
            <h3>Database Fundamentals</h3>
            <p>
              Through my MERN projects, I have gained practical experience with MongoDB,
              implementing document-based databases for real-world logistics scenarios.
              I have also studied relational databases through the "SQL and Relational
              Databases" course at Metropolia University of Applied Sciences, building
              a foundation in database design principles, data integrity, and basic query
              optimization. While I haven't yet built production SQL applications, I understand
              the fundamentals of both NoSQL and SQL paradigms.
            </p>
          </section>
        </div>
        <div class="col-4">
          <section class="box style1">
            <span class="icon featured fa-thumbs-up"></span>
            <h3>Programming & Development Tools</h3>
            <p>
              I have studied multiple programming languages including Python (through Metropolia
              and University of Helsinki courses, currently completing the advanced Python course),
              JavaScript, C++, and C#. My strongest foundation is in Python, demonstrated through
              a combinatorics application using Docker deployed on Render. I work daily with
              Visual Studio Code, Git, and GitHub for version control and collaboration.
              During my studies at Varia, I used Trello for team project management.
              My Cisco Academy cybersecurity training also informs my approach to secure coding practices.
            </p>
          </section>
        </div>
      </div>

    </div>
  </article>
);

export default Work;
