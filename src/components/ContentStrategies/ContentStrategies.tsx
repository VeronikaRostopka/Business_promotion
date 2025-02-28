interface Article {
  image: string;
  author: string;
  date: string;
  title: string;
}

interface ContentStrategiesProps {
  title: string;
  subtitle: string;
  articles: Article[];
}

export const ContentStrategies = ({ title, subtitle, articles }: ContentStrategiesProps) => {
  return (
    <section className="content-strategies">
      <div className="strategies-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      
      <div className="articles-grid">
        {articles.map((article, index) => (
          <article key={index} className="strategy-card">
            <div className="card-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="author">By {article.author}</span>
                <span className="date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}; 