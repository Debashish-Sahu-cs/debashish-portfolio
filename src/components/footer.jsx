import React from "react";
import SectionHeading from "./heading";
export default function Footer({contactTitle}) {
  return (
    <footer className="footer">
      <div className="footer-container" id="footer">
        {/* Footer Info */}
        <div className="footer-info">
          <a href="#home" className="footer-logo" aria-label="DEBA home link" >&lt;DEBA/&gt;</a>
          <p className="tagline">Work together, grow together</p>

          <ul className="contact-details">
            <li><a href="tel: +917043691404" aria-label="contact number">📞 +91 70436 91404</a></li>
            <li><a href="mailto:debashish.sahu.0222@gmail.com?subject=Hiring%20Inquiry&body=Hi," target="_blank" aria-label="Email address">📧 debashish.sahu.0222@gmail.com</a></li>
          </ul>

          <div className="quick-links">
            <h3>Quick links:</h3>
            <div className="link-columns">
              <ul>
                <li><a aria-label="home" href="#home">Home</a></li>
                <li><a aria-label="project" href="#projects">Projects</a></li>
                <li><a aria-label="achievement" href="#achievements">Achievements</a></li>
              </ul>
              <ul>
                <li><a aria-label="about" href="#about">About</a></li>
                <li><a aria-label="tech stack" href="#tech">Tech Stack</a></li>
                <li><a aria-label="education" href="#education">Education</a></li>
              </ul>
            </div>
          </div>

          <div className="socials">
            <a href="https://wa.me/917043691404?text=Hi,%20I%20am%20" target="_blank" aria-label="whatsapp"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/debashish-sahu-cs/" target="_blank" aria-label="linked-in" ><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Debashish-Sahu-cs" target="_blank" aria-label="github" ><i className="fab fa-github"></i></a>
          </div>
        </div>
          {/* Contact Form */}
        <div className="footer-contact" id="contact">
            <SectionHeading sectionHeader={contactTitle} />
          <form className="contact-form" action="https://formspree.io/f/mrbobggv" method="POST">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" name="submit" className="btn-send">
              Send
            </button>
          </form>
        </div>
      </div>
      

      <div className="footer-bottom">
        <p>Thanks for visiting</p>
        <p>{new Date().getFullYear()} © All rights reserved. Designed by Debashish</p>
      </div>
    </footer>
  );
}
