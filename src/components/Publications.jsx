import React from 'react';

function Publications() {
  const publicationsData = [
    {
      platform: "Medium",
      platformLink: "https://medium.com/@sk0551460",
      articles: [
        {
          title: "Demystifying Data Science: A Budget-Friendly Guide to Mastering the Art",
          link: "https://medium.com/@sk0551460/demystifying-data-science-a-budget-friendly-guide-to-mastering-the-art-7de0a56dc7f0"
        },
        {
          title: "Understanding Long Short-Term Memory (LSTM) Networks: A Beginner’s Guide",
          link: "https://medium.com/@sk0551460/understanding-long-short-term-memory-lstm-networks-a-beginners-guide-1b24b9a87757"
        },
        {
          title: "Transformers all you need",
          link: "https://medium.com/@sk0551460/transformers-all-you-need-9c162bc2f9bb"
        }
      ]
    }
  ];

  return (
    <section className="publication-section" id="publication-section">
      <div className="publication-container">
        <p className="publication-header">Publications</p>{' '}
        {publicationsData.map((pub, index) => (
          <div key={index}>{' '}
            <div className="publication-details">
              <span>
                <a href={pub.platformLink} target="_blank" rel="noopener noreferrer">{pub.platform}</a>{' '}
              </span>
            </div>
            <div className="publication-content">
              {pub.articles.map((article, idx) => (
                <p key={idx}>
                  <a href={article.link} target="_blank" rel="noopener noreferrer">{' '}
                    {`${idx + 1}:: ${article.title}`}{' '}
                  </a>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publications;