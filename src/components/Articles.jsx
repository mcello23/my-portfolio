import { memo } from 'react';
import { articles } from '../data/articles'; // Check if this crashes
import ArticleCard from './articles/ArticleCard'; // Check if this crashes
import MoreArticlesCard from './articles/MoreArticlesCard'; // Check if this crashes

const Articles = () => {
  return (
    <>
      {/* Articles Banner */}
      <div
        className="parallax-container valign-wrapper parallax-articles"
        style={{ minHeight: '250px' }}
      >
        <div className="section no-pad-bot" style={{ width: '100%' }}>
          <div className="container">
            <div className="row center">
              <h3
                className="header col s12 white-text"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: 700 }}
              >
                Articles & Writing
              </h3>
              <p
                className="flow-text white-text"
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
              >
                Technical publications and best practices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <section
        id="articles"
        className="section"
        style={{ padding: '60px 0', background: 'transparent' }}
        aria-labelledby="articles-heading"
      >
        <div className="container">
          <h3 id="articles-heading" className="sr-only">
            Articles & Writing
          </h3>
          <div className="row">
            {articles &&
              articles.map((article) => <ArticleCard key={article.id} article={article} />)}
            <MoreArticlesCard />
          </div>
          {/* /row */}
        </div>
      </section>
    </>
  );
};

export default memo(Articles);
