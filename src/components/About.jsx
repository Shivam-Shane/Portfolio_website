import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { marked } from 'marked';

function About({ setSpinnerVisible }) {
  const [showModal, setShowModal] = useState(false);
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSpinnerVisible(true);
    document.getElementById('mainContent').classList.add('blur');

    const currentUrl = window.location.href;
    const apiEndpoint = process.env.NEXT_PUBLIC_SUMMARIZE_BACKEND_API;

    try {
      const response = await fetch(`${apiEndpoint}?url=${encodeURIComponent(currentUrl)}`);
      if (response.ok) {
        const result = await response.json();
        const markdownSummary = result.summary;
        const htmlSummary = marked(markdownSummary);
        setSummary(htmlSummary);
      } else {
        setSummary('Error: Unable to fetch summary.');
      }
    } catch (error) {
      console.error('Error fetching the summary:', error);
      setSummary('Error: Unable to fetch summary.');
    } finally {
      setIsLoading(false);
      setSpinnerVisible(false);
      document.getElementById('mainContent').classList.remove('blur');
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.getElementById('mainContent').classList.remove('blur');
  };

  return (
    <section className="about-section" id="about-section">
      {/* Loader */}
      <div className={`spinner-container ${isLoading ? 'active' : ''}`}>
        <div className="loader"></div>
      </div>

      <div className="button-container">
        <a
          href="https://youtu.be/pnxEOCt7C1I"
          target="_blank"
          rel="noopener noreferrer"
          className="resumewatchbutton"
        >
          <span>Watch: Resume Praised by Krish Naik</span>{' '}
        </a>
      </div>
      <div className="about-container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <small className="welcome-text">{' '}
                Welcome to <span className="mobile-block">my portfolio website!</span>{' '}
              </small>
              <h1 className="animated animated-text">
                <span className="mr-2">Hey folks, I'm</span>
                <div className="animated-info">
                  <span className="animated-item">Shivam</span>{' '}
                  <span className="animated-item">ML Enthusiast</span>{' '}
                  <span className="animated-item">IT Engineer</span>{' '}
                </div>
              </h1>
              <p>
                "I'm a seasoned professional with over 2.9 years' experience in database management, backup/restore, user access, container deployment, and Kubernetes application deployments on Amazon EKS. Skilled in automating deployment workflows and resolving cross-functional issues, I've recently honed expertise in AI/ML technologies, with language and frameworks like, Python, machine learning, deep learning, and NLP. Proficient in deploying models in AWS via GitHub actions, docker/podman and MLOps, I possess end-to-end knowledge of data science project lifecycles."
              </p>{' '}
              <div className="custom-btn-group mt-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1JxNZp_3Lu6ugCMFYGrmxy1KAQWmDojSu"
                  className="btn mr-lg-2 custom-btn"
                >
                  <i className="uil uil-file-alt"></i> Download Resume
                </a>
                              <button
                id="summarizeButton"
                className="btn custom-btn custom-btn-bg custom-btn-link"
                onClick={handleSummarize}
                >
                  Summarize Portfolio
                </button>{' '}
              </div>
              <span>-Last Updated: 20:03:2025</span>{' '}
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image">
              <img
                src="/images/about-image.jpg"
                className="img-fluid_main"
                alt="Shivam"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header>
          <Modal.Title>Summary</Modal.Title>{' '}
          <Button variant="close" onClick={handleCloseModal} aria-label="Close">
            <span aria-hidden="true">×</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div
            dangerouslySetInnerHTML={{ __html: summary }}
            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
          />
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default About;