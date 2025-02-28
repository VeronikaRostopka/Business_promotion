interface Feature {
  icon: string;
  colorClass: string;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

export const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <section className="product-features">
      <h2>Product was Built Specifically for You</h2>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className={`feature-icon ${feature.colorClass}`}>
              <img src={feature.icon} alt="" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="features-cta">
        <button className="sign-up-now">SIGN UP NOW</button>
      </div>
    </section>
  );
}; 