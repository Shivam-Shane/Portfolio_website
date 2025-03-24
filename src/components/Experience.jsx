import React from 'react';



function Experience() {
  return (
    <section className="full-screen experience" id="experience">
      <div className="container">
        <h2>Professional Experience</h2>{' '}
        <div className="experience-item">
          <h3>IT Engineer</h3>{' '}
          <h4>Indus Valley Partners — Uttar Pradesh, India</h4>{' '}
          <p className="date">January 2022 – Oct 2024</p>{' '}
          <ul>
            <li>Managed installation, configuration, backup, restoration, and optimization of databases such as MySQL and MSSQL, leading to a 25% improvement in query response times.</li>{' '}
            <li>Managed and optimized container deployment and orchestration using Amazon EKS, ensuring scalability and reliability for Kubernetes applications with cross-functional teams.</li>{' '}
            <li>Collaborated closely with development and operations teams and managed support to streamline CI/CD processes, enhancing automation and deployment lifecycles.</li>{' '}
            <li>Designed and proposed a custom service monitoring system using Python, automating reading and categorizing emails for critical/down services, routing them to appropriate teams. This solution eliminated the need for manual intervention, reduced response time by 77%, and ensured real-time issue resolution via email alerts, resulting in minimal production downtime.</li>{' '}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;