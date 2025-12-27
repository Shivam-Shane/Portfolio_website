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
    <section className="publication section" id="publication">
      <h2 className="section_title" data-aos="zoom-in">
        My Work
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Publications
      </span>

      <div className="publication_container container">
        <div className="publication_content">
          <h3 className="publication_title" data-aos="fade-up" data-aos-delay="0">
            My Articles
          </h3>
          <div className="publication_info">
            {publicationsData.map((pub, index) => (
              <div key={index} className="publication_card" data-aos="fade-up" data-aos-delay={300 + index * 200}>
                <i className="uil uil-book-open publication_card_icon"></i>
                <h3 className="publication_card_title">
                  <a href={pub.platformLink} target="_blank" rel="noopener noreferrer">
                    {pub.platform}
                  </a>
                </h3>
                <div className="publication_articles">
                  {pub.articles.map((article, idx) => (
                    <div key={idx} className="publication_article">
                      <span className="publication_card_data">{`${idx + 1}. ${article.title}`}</span>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="publication_button"
                      >
                        Read Article
                        <i className="uil uil-arrow-right publication_button_icon"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publications;