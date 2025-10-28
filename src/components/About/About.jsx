import React, { useEffect } from 'react';
import "./about.css";
import passportPhoto from "../../assets/profile_photo.jpg";
import cvPdf from '../../assets/cv/Jose_Chaves_CV_eng.pdf';
import anPdf from '../../assets/cv/Jose_Chaves_CV.pdf';

function About() {

  useEffect(() => {
    const user = 'oldemar.chaves';
    const domain = 'gmail.com';
    const emailLink = document.getElementById('about-email-link');
    if (emailLink) {
      emailLink.href = `mailto:${user}@${domain}`;
      emailLink.textContent = `${user}@${domain}`;
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = passportPhoto;

    img.onload = () => {
      console.log('Imagen precargada exitosamente');
    };

    img.onerror = () => {
      console.error('Error al precargar la imagen');
    };
    return () => {
      img.src = '';
    };
  }, []);

  const born = new Date("11/04/1970");
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
              alt="José Oldemar Chaves"
              loading="eager"
              fetchpriority="high"
            />
          </div>

          <div className="about-info">
            <div className="info-container">
              <p className="about-info-item">
                <span className="title-s">Full name:</span> José Oldemar Chaves Urbina</p>
              <p className="about-info-item">
                <span className="title-s">Profile:</span> Junior Full Stack Developer | Logistics Background</p>
              <p className="about-info-item">
                <span className="title-s">Email: </span>
                <a id="about-email-link" href="mailto:[email protected]" className="email-protected">
                  [email protected]
                </a>
              </p>
              <p className="about-info-item">
                <span className="title-s">Location:</span> Helsinki, Finland
              </p>
              <p className="about-info-item">
                <span className="title-s">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/oldemar-chaves/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '8px', color: '#0066cc' }}
                >
                  /in/oldemar-chaves
                </a>
              </p>
            </div>
            <div className="title-and-links">
              <h3 className="title">Download my Resume:</h3>
              <div className="cv-links-modern">
                <a
                  href={cvPdf}
                  download="Jose_Oldemar_Chaves_CV_English.pdf"
                  className="cv-btn cv-btn-primary"
                >
                  📄 Download CV (English)
                </a>
                <a
                  href={anPdf}
                  download="Jose_Oldemar_Chaves_Ansioluettelo.pdf"
                  className="cv-btn cv-btn-secondary"
                >
                  📄 Lataa ansioluettelo (Suomi)
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
            <strong>Meet José</strong><br />
            Hello! My name is José Oldemar Chaves Urbina.
            I was born {age} years ago in the city of Puerto Limón, on the Caribbean coast of Costa Rica,
            and I now reside in Helsinki, Finland.
          </p>

          <p className="lead">
            <strong>A Journey in Logistics</strong><br />
            My professional path began after earning a technical diploma in accounting
            from a vocational college in Costa Rica, complemented by my upper secondary education,
            equivalent to the Finnish <span lang="fi"><i>lukio</i></span>.
            For over two decades, I worked in logistics, focusing on imports and exports.
            My career ranged from positions at the Costa Rican Customs Office
            to various roles in customs and shipping agencies, and as a dispatcher
            at maritime container terminals. This included experience at Costa Rica’s
            largest port terminal in Moín, and more recently at Posti’s logistics center
            in Vantaa, Finland.
          </p>

          <p className="lead">
            <strong>Diving into Software Development</strong><br />
            In 2024, I completed a degree in ICT and Software Development
            <span lang="fi">(<i>Tieto- ja viestintätekniikan perustutkinto</i>)</span> at
            <span lang="fi"> Vantaan Ammattiopisto Varia</span> in Finland.
            Since then, I have continued to expand my technical skills
            through courses in Python programming, DevOps with Docker,
            discrete mathematics, and SQL databases — building a solid foundation
            in modern software development practices.
          </p>

          <p className="lead">
            <strong>Bridging Logistics and Technology</strong><br />
            My extensive logistics background provides me with valuable insights
            into supply chain operations, inventory systems, and the practical challenges
            of global trade. This real-world experience positions me uniquely within the tech sector —
            I understand both business processes and technical solutions.
            Whether developing logistics software, providing IT support for supply chain systems,
            or optimizing operational workflows, I can bridge the communication gap
            between technical teams and logistics operations.
            I speak both languages: the language of developers,
            and the language of warehouse managers, dispatchers, and supply chain coordinators.
            This dual perspective enables me to create user-centered solutions that
            truly address operational needs — not just technical requirements.
          </p>

          <p className="lead">
            <strong>Beyond the Professional</strong><br />
            Outside my professional life, I am an avid football player and swimmer,
            enjoying both at an amateur level. I also love running and have completed
            several half-marathons, including one in Helsinki.
            In my free time, I appreciate the peace of Finnish lakes
            and the rejuvenating experience of the sauna.
          </p>

          <p className="lead">
            <strong>A Unique Perspective</strong><br />
            My journey — from international logistics to software development,
            and from Costa Rica to Finland — has shaped the way I approach
            problem-solving and innovation.
            I bring a blend of practical experience and fresh technical insight,
            ready to contribute to meaningful, efficient, and human-centered projects
            in the world of technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
