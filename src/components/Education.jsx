import React from 'react';


function Education() {
  const certificationsData = [
    {
      issuer: "GL",
      title: "Statistics for Data Science ",
      date: "April-2023",
      certificateLink: "https://github.com/Shivam-Shane/Certificates/blob/main/Statistices%20for%20data%20science%20provided%20by%20Great%20learning.png",
      description: "A in-depth course on Statistics by Great Learning"
    },
    {
      issuer: "Edureka",
      title: "Data Science and Machine Learning Internship Program",
      date: "Nov 2022 - Mar 2023",
      certificateLink: "https://github.com/Shivam-Shane/Certificates/blob/main/Data%20Science%20and%20machine%20learning%20internship.pdf",
      description: "A four month internship program offered by Edureka: <b>Topics:</b> Python, Statistics, Linear Algebra, Machine Learning, Deep Learning, Tableau. <br> <b>Consisting</b> of 1 main project and 7 small projects on different topics"
    },
    {
      issuer: "Internshala",
      title: "Machine Learning",
      date: "May-July 2021",
      certificateLink: "https://github.com/Shivam-Shane/Certificates/blob/main/Machine%20Learning%20Training%20-%20Certificate%20of%20Completion.pdf",
      description: "The training consisted of Introduction to Machine Learning, Data, Introduction to Python, Data Exploration and Pre-processing, Linear Regression, Introduction to Dimensionality Reduction, Logistic Regression, Decision Tree, Ensemble Models, and Clustering (Unsupervised Learning) modules."
    }
  ];

  const educationData = [
    {
      cgpa: "8.1",
      title: "BCA",
      date: "2019-2022",
      institution: "Lovely Professional University, Phagwara, Punjab"
    },
    {
      cgpa: "8.9",
      title: "XII (12th)",
      date: "2018-2019",
      institution: "Government Sen. Sec School (Multipurpose), PSEB, Ludhiana, Punjab"
    },
    {
      cgpa: "8.6",
      title: "X (10th)",
      date: "2016-2017",
      institution: "K.D Public School, PSEB, Ludhiana, Punjab"
    }
  ];

  return (
    <section className="Education-certification-section" id="Certification">
      <div className="eduation-container">
        <div className="row">
          {/* Certification & Internships */}
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Certification & Internships</h2>{' '}
            <div className="timeline">
              {certificationsData.map((cert, index) => (
                <div className="timeline-wrapper" key={index}>
                  <div className="timeline-yr">
                    <span>{cert.issuer}</span>{' '}
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>{cert.title}</span>{' '}
                      <small>{cert.date}</small>{' '}
                    </h3>
                    <span>
                      <b>
                        <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">{' '}
                          View Certificate
                        </a>
                      </b>
                    </span>
                    <p dangerouslySetInnerHTML={{ __html: cert.description }} />{' '}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educations */}
          <div className="col-lg-6 col-12">
            <h2 className="mb-4 mobile-mt-2">Educations</h2>{' '}
            <div className="timeline">
              {educationData.map((edu, index) => (
                <div className="timeline-wrapper-education" key={index}>
                  <div className="content-education">
                    <span>{edu.cgpa}<small> {' '}
                      CGPA</small></span>{' '}
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>{edu.title}</span>{' '}
                      <small>{edu.date}</small>{' '}
                    </h3>
                    <p>{edu.institution.split('<br>').map((line, i) => (
                      <span key={i}>{line}{' '}<br /></span>
                    ))}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;