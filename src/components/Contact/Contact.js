import React, { useEffect } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  useEffect(() => {
    const user = 'oldemar.chaves';
    const domain = 'gmail.com';
    const emailLink = document.getElementById('email-link');
    emailLink.href = `mailto:${user}@${domain}`;
    emailLink.textContent = `${user}@${domain}`;
  }, []);

  return (
    <section className="contact-mf">
      <div className="container">
        <div className="title-box">
          <h3 className="contact-title-a">Contact</h3>
          <p className="contact-subtitle-a">Let's Work Together.</p>
          <div className="line-mf"></div>
        </div>
        <div className="contact-content">
          <p>If you would like to get in touch, please send an email to:</p>
          <a id="email-link" href="mailto:[email protected]" className="email-link">[email protected]</a>
        </div>
        <div className="social-icons">
          <h5>Connect with Me</h5>
          <ul className="social">
            <li>
              <a
                href="https://twitter.com/OldemarCRC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/oldemar.chaves"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/oldemar-chaves/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/OldemarCRC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
        <footer>
          <p>&copy; Jose Oldemar Chaves Urbina. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;