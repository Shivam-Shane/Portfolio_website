import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const projectsData = [
    {
      title: "Anti Theft",
      date: "Nov 2024 - Jan 2025",
      github: "https://github.com/Shivam-Shane/AntiTheft.git",
      description: "AntiTheft captures crucial evidence like images, audio, and video of anyone attempting unauthorized access to your system by entering a wrong password. It also sends location details and alerts to your email, ensuring you remain informed about any intrusion attempts.",
      image: "/images/project/antitheft.gif"
    },
    {
      title: "Cold Calling On Your Fingertips",
      date: "Oct 2024 - Oct 2024",
      github: "https://github.com/Shivam-Shane/cold_calling_on_your_fingertips",
      description: "Cold Email Automation is a tool that streamlines the process of sending personalized cold emails to potential recruiters. The project aims to enhance the efficiency of outreach efforts by automating the generation and dispatch of emails, reducing manual work, and ensuring higher engagement rates through customization.",
      image: "/images/project/coldcalling.gif"
    
    },
    {
      title: "Service Monitoring",
      date: "July 2024 - Sep 2024",
      github: "https://github.com/Shivam-Shane/Service_monitoring.git",
      description: "This project aims to automate the monitoring of critical emails related to down services or devices in various production environments. By leveraging core Python skills and the Gmail API, the system reduces the need for manual intervention by automatically reading emails from a designated Gmail inbox, processing the content, and sending alerts to the appropriate teams based on predefined rules.",
      image: ""
    },
    {
      title: "Image to Caption Generator",
      date: "Apr 2024 - Jun 2024",
      github: "https://github.com/Shivam-Shane/Image_Captioning.git",
      description: "Developed and deployed an AI-powered Image Caption Generator using an advanced deep-learning model (RESNET50). Leveraged AWS for scalability and reliability, and implemented CI/CD pipelines with GitHub Actions for seamless updates and deployment.",
      image: "/images/project/imagecaption.gif"
    },
    {
      title: "Text Summarizer",
      date: "Nov 2023 - Mar 2024",
      github: "https://github.com/Shivam-Shane/Text_summarizer_nlp_project",
      description: "A text summarizer is a tool designed to automatically condense a given document or piece of text while retaining its essential information and main ideas. Using hugging face model: google pegasus, module coding and machine learning algorithms, It analyzes the input text, identifies key sentences or phrases, and generates a concise summary that captures the core meaning of the original content.",
      image: "/images/project/TextSummarizer.gif"
    },
    {
      title: "Consumer Disputed Predictor",
      date: "Aug - Oct 2023",
      github: "https://github.com/Shivam-Shane/Project.git",
      description: "A data science project using modular coding paradigm involves using NLP techniques to classify consumer disputes. This project collects and preprocesses consumer feedback data, applies NLP techniques to extract features and patterns, and trains a machine learning model to classify new complaints into dispute categories. The project aims to automate the process of addressing consumer disputes.",
      image: "/images/project/consumer_dispute_classfier.gif"
    },
    {
      title: "Gas Leakage Detector",
      date: "Lovely Professional University",
      description: "A small project using Arduino that is capable of detecting gas leakage with help of MQ-2 sensor in its area of range.",
      image: ""
    },
    {
      title: "Hamlet2Eco",
      date: "Lovely Professional University",
      link: "https://hamlet2eco.blogspot.com/",
      description: "Hamlet2Eco aims to empower small communities by implementing sustainable practices to protect and enhance the environment. The project focuses on reducing carbon footprints, promoting renewable energy, conserving natural resources, and fostering environmental awareness and education.",
      image: ""
    }
  ];
  const showImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <section className="full-screen projects" id="projects">
      <div className="container">
        <h2 className="ProjectTitle">All Projects</h2>{' '}
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <div className="project-view" key={index}>{' '}
              <h3>
                <span>{project.title}</span>{' '}
                {project.image && (
                  <button className="eye-btn" onClick={() => showImage(project.image)}>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                )}
              </h3>
              <h6>{project.date}</h6>{' '}
              {project.github && (
                <span>
                  <small>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">{' '}
                      <b>View Code</b>{' '}
                    </a>
                  </small>
                </span>
              )}
              {project.link && (
                <span>
                  <small>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{' '}
                      <b>Environmental Website</b>{' '}
                    </a>
                  </small>
                </span>
              )}
              <p>{project.description}</p>{' '}
            </div>
          ))}
        </div>
      </div>

        {/* Image Popup */}
      {selectedImage && (
        <div className="project-image-popup open">
          <button className="close-image-btn" onClick={closeImage}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <img src={selectedImage} alt="Project Preview" className="project-image" />
        </div>
      )}

    </section>
  );
}

export default Projects;