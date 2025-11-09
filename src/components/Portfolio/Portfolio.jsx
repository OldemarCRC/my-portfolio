import React, { useEffect, useMemo } from 'react';
import './portfolio.css';
import container_number from "../../assets/portfolio/container_number_picture.jpeg";
import containers_terminal_image from "../../assets/portfolio/containers_terminal_image.jpeg";
import notebook_image from "../../assets/portfolio/notebook_image.webp";
import payroll_image from "../../assets/portfolio/payroll_image.jpeg";
import combinatorics_app_image from "../../assets/portfolio/combinatorics_app.png";

const Portfolio = () => {

  const imagesToPreload = useMemo(() => [
    container_number,
    containers_terminal_image,
    notebook_image,
    payroll_image
  ], []);

  useEffect(() => {
    const preloadImages = () => {
      imagesToPreload.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
          console.log(`Imagen precargada: ${imageSrc}`);
        };

        img.onerror = () => {
          console.error(`Error al precargar: ${imageSrc}`);
        };
      });
    };

    preloadImages();

    return () => {
      imagesToPreload.forEach(imageSrc => {
        const img = new Image();
        img.src = '';
      });
    };
  }, [imagesToPreload]);


  return (
    <article id="portfolio" className="portfolio-mf">
      <div className="container">
        <header>
          <h2>
            Here is a selection of recent projects and programmes I have
            developed.
          </h2>
        </header>
        <div className="portfolio-grid">

          <div className="portfolio-item">
            <a href="https://konttihub.fi/" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-image">
                <img
                  src={containers_terminal_image}
                  alt="Container Terminal"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content">
                <h3>Container Terminal Web App</h3>
                <p>
                  Log in as 'demo_user' to explore the app's features.
                  Enterprise-level web application for managing container movements
                  and inventories at container terminals and port facilities.
                </p>
              </div>
            </a>
          </div>

          <div className="portfolio-item">
            <a href="https://oldemarcrc.github.io/Sea-container-Check-Digit/" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-image">
                <img
                  src={container_number}
                  alt="Check Digit"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content">
                <h3>Check Digit</h3>
                <p>Verifying the check-digit of a sea container using React JS to ensure accurate container identification.</p>
              </div>
            </a>
          </div>



          <div className="portfolio-item">
            <a href="https://combinatorics-app-7e1w.onrender.com/" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-image">
                <img
                  src={combinatorics_app_image}
                  alt="Combinatorics App"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content">
                <h3>Combinatorics Web App</h3>
                <p>
                  Lightweight web app built with Python and Flask, containerized with Docker and deployed on Render.
                  Calculates permutations and combinations interactively.
                </p>
              </div>
            </a>
          </div>

          <div className="portfolio-item">
            <a
              href="https://github.com/OldemarCRC/python-file-handling-payroll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio-image">
                <img
                  src={payroll_image}
                  alt="payroll"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content">
                <h3>Payroll</h3>
                <p>Payroll System with File Handling using Python.</p>
              </div>
            </a>
          </div>

          <div className="portfolio-item">
            <a
              href="https://github.com/OldemarCRC/python-notebook-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio-image">
                <img
                  src={notebook_image}
                  alt="Notebook manager"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content">
                <h3>Notebook manager</h3>
                <p>Notebook manager using Python.</p>
              </div>
            </a>
          </div>



        </div>

      </div>
    </article>
  );
};

export default Portfolio;
