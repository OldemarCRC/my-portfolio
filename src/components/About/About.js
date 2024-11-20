import React from "react";
import "./about.css";
import passportPhoto from "../../assets/profile_photo.jpg";
import cvPdf from '../../assets/OLDEMAR_CHAVES_resume.pdf';
import anPdf from '../../assets/OLDEMAR_CHAVES_ansioluettelo.pdf';
import ansioluetteloImg from '../../assets/ansioluettelo_image.png';
import resumeImg from '../../assets/resume_image.jpg';

function About() {
  const born = new Date("04/11/1970");
  const today = new Date();

  let age = today.getFullYear() - born.getFullYear();
  const month = today.getMonth() - born.getMonth();

  // Si el mes actual es anterior al mes de nacimiento, resta 1 al cálculo de edad
  if (month < 0 || (month === 0 && today.getDate() < born.getDate())) {
    age--;
  }
  return (
    <section id="about" className="about-mf">
      <div className="container">
        <div className="about-content">
          <div className="about-img">
            <img
              src={passportPhoto}
              alt="Passport"
            />
          </div>

          <div className="about-info">
            <div className="info-container">
              <p className="about-info-item"><span className="title-s">Full name:</span> José Oldemar Chaves Urbina</p>
              <p className="about-info-item"><span className="title-s">Profile:</span> Full Stack Developer</p>
              <p className="about-info-item"><span className="title-s">Email:</span> oldemar.chaves@gmail.com</p>
            </div>
            <div className="title-and-links">
              <h3 className="title">Download my CV in English or Finnish:</h3>
              <div className="cv-links">
                <a href={cvPdf} download="OLDEMAR_CHAVES_resume.pdf" className="cv-download-link" rel="noopener noreferrer">
                  <img src={resumeImg} alt="Download CV" className="cv-download-icon" />
                </a>
                <a href={anPdf} download="OLDEMAR_CHAVES_ansioluettelo.pdf" className="cv-download-link" rel="noopener noreferrer">
                  <img src={ansioluetteloImg} alt="Download CV" className="cv-download-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="about-me">
          <div>
            <h5 className="title-left">About me</h5>
          </div>
          <p className="lead">
          <strong>Meet Oldemar</strong><br/>
            Hello! My name is José Oldemar Chaves Urbina, but most people know me as Oldemar.
            I was born {age} years ago in the city of Puerto Limón, Caribbean coast of Costa Rica,
            and now I reside in the modern city of Helsinki, Finland.
          </p>
          <p className="lead">
          <strong>A Journey in Logistics</strong><br/>
            My professional journey began after obtaining a technical diploma in accounting
            from a vocational college in Costa Rica, complemented by my upper secondary education equivalent to the Finnish "Lukio". I spent over two decades in logistics, focusing on imports and exports. My career ranged from working at the Costa Rican Customs Office to various roles in customs agencies, shipping agencies, and as a dispatcher at maritime container terminals, including Costa Rica's most significant port terminal in Moín.
          </p>
          <p className="lead">
          <strong>Diving into Software Development</strong><br/>
            I recently completed an ICT and Software Development
            (Tieto- ja viestintätekniikan perustutkinto) at Vantaan Ammattiopisto Varia
            in Finland, which has provided me with strong foundations in software development and information technology.
          </p>
          <p className="lead">
          <strong>Bridging Logistics and Technology</strong><br/>
            With my background in logistics, I bring a deep understanding of supply chains,
            inventory management, and the complexities of global trade.
            By combining this with my programming skills, I am now able to build solutions
            that streamline operations, automate processes, and improve decision-making.
            This fusion of logistics and technology allows me to create software that not
            only addresses the technical aspects but also takes into account the real-world
            challenges businesses face in logistics and supply chain management.
          </p>
          <p className="lead">
          <strong>Beyond the Professional</strong><br/>
            Outside of my professional interests, I am an avid football player and swimmer,
            enjoying both sports at an amateur level. I also take pleasure in running,
            having completed several half-marathons, including one in Helsinki.
            In addition, I relish the tranquility of Finnish lakes and the rejuvenating
            experience of a sauna.
          </p>
          <p className="lead">
          <strong>A Unique Perspective</strong><br/>
            This blend of international logistics experience and a fresh foray into IT,
            combined with my multicultural life journey, shapes my unique perspective and
            approach to problem-solving in the tech world. I am excited about the opportunities
            that lie ahead in my new career path and am eager to contribute my skills and
            experiences in new and challenging environments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
