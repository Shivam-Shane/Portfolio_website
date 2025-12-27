// src/components/about/About.jsx
import React from "react";
import { workPeriods, gaps } from "../../data/career" 
import { calculateExperience } from "../../utils/experience"

const About = () => {
  // compute experience once (sync, SSR-friendly)
  const { human, decimalYears } = calculateExperience(workPeriods, gaps);

  const experienceLabel = decimalYears < 1 ? `${Math.round(decimalYears * 12)} months` : `${decimalYears} years`;

  return (
    <section className="about section" id="about">
      <h2 className="section_title" data-aos="zoom-in">
        About Me
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        My introduction
      </span>

      <div className="about_container container">
        <img
          src="/images/about-image.jpg"
          alt=""
          className="about_img"
          data-aos="fade-right"
        />

        <div className="about_data">
          <div className="about_info">
            <div className="about_box" data-aos="fade-left" data-aos-delay="0">
              <i className="uil uil-award about_icon"></i>
              <h3 className="about_title">Professional Experience</h3>
              <span className="about_subtitle">{experienceLabel} till today</span>
            </div>

            <div className="about_box" data-aos="fade-left" data-aos-delay="300">
              <i className="uil uil-suitcase-alt about_icon"></i>
              <h3 className="about_title">Working As</h3>
              <span className="about_subtitle">Gen AI Engineer.</span>
            </div>

            <div className="about_box" data-aos="fade-left" data-aos-delay="600">
              <i className="uil uil-graduation-cap about_icon"></i>
              <h3 className="about_title">Qulafication</h3>
              <span className="about_subtitle">BCA Graduate</span>
            </div>
          </div>

          <p className="about_description" data-aos="zoom-in">
            {"Gen AI Engineer with " +
              experienceLabel +
              " years of hands-on experience building scalable AI solutions, blending DevOps expertise with cutting-edge NLP, LLMs, and RAG frameworks to drive intelligent automation and efficiency. From deploying production-ready chatbots on AWS to optimizing databases and CI/CD pipelines, I transform complex ideas into MVPs that reduce downtime, cut costs, and enhance user experiences—delivering 77% faster incident responses in real applications. Passionate about Agentic AI workflows, I help companies streamline customer support, knowledge retrieval, and interview prep using Python, Docker, Kubernetes, and cloud infrastructure. Explore projects like HireBoosted and AskNimbus for proof of impact"}
          </p>

          <a
            href="https://youtu.be/pnxEOCt7C1I"
            target="_blank"
            rel="noopener noreferrer"
            className="button button_flex"
            data-aos="flip-right"
          >
            Resume Praised By Krish Naik
            <svg
              className="button_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.615 3.184A2.999 2.999 0 0 0 17.553 2C15.182 2 12 2 12 2s-3.182 0-5.553.184a3 3 0 0 0-2.062 1.184C3.644 4.456 3.5 6.69 3.5 9.999v4c0 3.31.144 5.544.885 6.816a3 3 0 0 0 2.062 1.184C8.818 22 12 22 12 22s3.182 0 5.553-.184a2.999 2.999 0 0 0 2.062-1.184C20.356 19.544 20.5 17.31 20.5 14v-4c0-3.309-.144-5.543-.885-6.816zM10 15.5v-7l6 3.5-6 3.5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
