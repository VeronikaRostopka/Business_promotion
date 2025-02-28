interface ManagementProps {
  title: string;
  description: string;
  features: string[];
}

export const Management = ({ title, description, features }: ManagementProps) => {
  return (
    <section className="management">
      <div className="management-content">
        <div className="management-text">
          <h2>Effortless Validation for</h2>
          <h3>{title}</h3>
          <p className="description">{description}</p>
          
          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h4>{feature}</h4>
                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="management-image">
          <img 
            src="/images/management-illustration.svg" 
            alt="Management illustration" 
          />
        </div>
      </div>
    </section>
  );
}; 