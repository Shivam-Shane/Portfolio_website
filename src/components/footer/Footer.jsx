// src/components/footer/Footer.jsx
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const ParticlesBackground = dynamic(() => import("../particles/ParticlesBackground"), { ssr: false });

const Footer = () => {
  useEffect(() => {
    
  }, []);

  return (
    <footer className="footer">
      <div className="footer_container container" style={{ position: "relative", overflow: "hidden" }}>
        <ParticlesBackground />
        <h1 className="footer_title">Shivam</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer_social">
          
          <a
            href="https://www.instagram.com/shivam0.0shane/"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
            data-tooltip="Instagram"
            aria-label="Follow Shivam on Instagram"
          >
            <span className="sr-only">Instagram</span>
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://x.com/shivamshane"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
            data-tooltip="Twitter"
            aria-label="Follow Shivam on Twitter"
          >
            <span className="sr-only">Twitter</span>
            <i className="uil uil-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-hireme/"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
            data-tooltip="LinkedIn"
            aria-label="Connect with Shivam on LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/Shivam-Shane"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
            data-tooltip="GitHub"
            aria-label="View Shivam's GitHub profile"
          >
            <span className="sr-only">GitHub</span>
            <i className="uil uil-github"></i>
          </a>
          <a
            href="https://buymeacoffee.com/shivamshane"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
            data-tooltip="Buy Me a Coffee"
            aria-label="Support Shivam  on Buy Me a Coffee"
          >
            <span className="sr-only">Buy Me a Coffee</span>
            <i className="uil uil-coffee"></i>
          </a>
          <a
            href="https://medium.com/@sk0551460"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
            data-tooltip="Medium"
            aria-label="Read Shivam's Medium articles"
          >
            <span className="sr-only">Medium</span>
            <i className="uil uil-medium-m"></i>

          </a>
        </div>
        <span className="footer_copy">
  © {new Date().getFullYear()} Shivam. All rights reserved.
      </span>

      </div>
    </footer>
  );
};

export default Footer;