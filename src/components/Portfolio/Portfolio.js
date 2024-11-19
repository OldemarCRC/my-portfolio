import './portfolio.css';

const Portfolio = () => {
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
            <a href="https://oldemarcrc.github.io/Sea-container-Check-Digit/" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-image">
                <img
                  src="https://images.pexels.com/photos/5213155/pexels-photo-5213155.jpeg"
                  alt="Check Digit"
                />
              </div>
              <div className="portfolio-content">
                <h3>Check Digit</h3>
                <p>Verifying the check-digit of a sea container using React JS to ensure accurate container identification.</p>
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
                  src="https://images.pexels.com/photos/5849582/pexels-photo-5849582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="payroll"
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
                  src="https://images.pexels.com/photos/544115/pexels-photo-544115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Notebook manager"
                />
              </div>
              <div className="portfolio-content">
                <h3>Notebook manager</h3>
                <p>Notebook manager using Python.</p>
              </div>
            </a>
          </div>
          
          <div className="portfolio-item">
            <a href="https://kontti-client.onrender.com/" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-image">
                <img
                  src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"
                  alt="Event Countdown"
                />
              </div>
              <div className="portfolio-content">
                <h3>Container Terminal Web App</h3>
                <p>
                Enterprise-level web application for managing container movements
                and inventories at container terminals and port facilities.
                </p>
              </div>
            </a>
          </div>
        </div>
        
      </div>
    </article>
  );
};

export default Portfolio;
