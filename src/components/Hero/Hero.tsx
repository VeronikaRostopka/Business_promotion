interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="hero-buttons">
            <button className="get-started">Get started</button>
            <button className="watch-video">
              <span className="play-icon">▶</span>
              Watch the Video
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/images/hero-illustration.svg" 
            alt="Product illustration" 
          />
        </div>
      </div>
    </section>
  );
}; 