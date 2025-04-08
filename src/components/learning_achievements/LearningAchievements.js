import React, { useEffect } from 'react';
import './learning_achievements.css';
import js_logo from "../../assets/learning/JavaScript-logo.png";
import cplus_logo from "../../assets/learning/ISO_C++_Logo.svg.png";
import ai_logo from "../../assets/learning/certificate-elements-of-ai.png";
import sql_logo from "../../assets/learning/sql_logo1.png";
import helsinki_university_logo from "../../assets/learning/university_of_helsinki_logo.jpg";
import metropolia_logo from "../../assets/learning/metropolia_s_orange.png"

const metropolia_studies_link = "https://studyinfo.fi/koski/opinnot/36f8158ebe9942a0bdc389d0c6db3657";
const helsinki_studies_link = "https://studyinfo.fi/koski/opinnot/8439aad851a644589179e495dd665b5d";

const LearningAchievements = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <article id="learning-achievements" className="learning-mf">
        <div className="container">
          <header>
            <h2>Learning Achievements</h2>
          </header>
          <div className="achievements-row">
            {/* Badge 1 */}
            <div className="badge-1">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="8b9965fc-74ce-4ec4-a730-b06983857470"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
  
            {/* Badge 2 */}
            <div className="badge-2">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="fcb4e4b5-fc66-42eb-915d-14abd3885369"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
  
            {/* Badge 3 - Python */}
            <div className="badge-3">
              <a
                className="own-badge"
                href={metropolia_studies_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                className="metropolia"
                src={metropolia_logo}
                alt="metropolia logo"
              />
                <div className="middle-badge"></div>
                <img
                  className="language"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  alt="python logo"
                />
                <p className="study-info">Python Programming</p>
                <p className="study-info">
                  Metropolia University of Applied Sciences
                </p>
              </a>
            </div>
  
            {/* Badge 4 - JavaScript */}
          <div className="badge-3">
            <a
              className="own-badge"
              href={metropolia_studies_link}
              target="_blank"
              rel="noopener noreferrer"
            >
                <img
                className="metropolia"
                src={metropolia_logo}
                alt="metropolia logo"
              />
              <div className="middle-badge"></div>
              <img
                className="language"
                src={js_logo}
                alt="javascript logo"
              />
              <p className="study-info">Introduction to JavaScript</p>
              <p className="study-info">
                Metropolia University of Applied Sciences
              </p>
            </a>
          </div>

          {/* Badge 5 - C++ */}
          <div className="badge-3">
            <a
              className="own-badge"
              href={metropolia_studies_link}
              target="_blank"
              rel="noopener noreferrer"
            >
                <img
                className="metropolia"
                src={metropolia_logo}
                alt="metropolia logo"
              />
              <div className="middle-badge"></div>
              <img
                className="language"
                src={cplus_logo}
                alt="c++ logo"
              />
              <p className="study-info">C++ Programming</p>
              <p className="study-info">
                Metropolia University of Applied Sciences
              </p>
            </a>
          </div>

           {/* Badge 7 - SQL */}
           <div className="badge-3">
            <a
              className="own-badge"
              href={metropolia_studies_link}
              target="_blank"
              rel="noopener noreferrer"
            >
                <img
                className="metropolia"
                src={metropolia_logo}
                alt="metropolia logo"
              />
              <div className="middle-badge"></div>
              <img
                className="ai"
                src={sql_logo}
                alt="sql logo"
              />
              <p className="study-info">SQL and Relational Databases</p>
              <p className="study-info">Metropolia University of Applied Sciences</p>
            </a>
          </div>

          {/* Badge 6 - AI */}
          <div className="badge-3">
            <a
              className="own-badge"
              href={helsinki_studies_link}
              target="_blank"
              rel="noopener noreferrer"
            >
                <img
                className="metropolia"
                src={helsinki_university_logo}
                alt="metropolia logo"
              />
              <div className="middle-badge"></div>
              <img
                className="ai"
                src={ai_logo}
                alt="AI certificate"
              />
              <p className="study-info">Introduction to AI</p>
              <p className="study-info">University of Helsinki</p>
            </a>
          </div>


          <div className="badge-3">
            <a
              className="own-badge"
              href= "https://certificates.mooc.fi/validate/3felwddmdie"
              target="_blank"
              rel="noopener noreferrer"
            >
                <img
                className="metropolia"
                src={helsinki_university_logo}
                alt="metropolia logo"
              />
              <div className="middle-badge"></div>
              <img
                  className="language"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  alt="python logo"
                />
              <p className="study-info">Introduction to Programming</p>
              <p className="study-info">University of Helsinki</p>
            </a>
          </div>

          </div>
        </div>
      </article>
    );
  };
  
  export default LearningAchievements;