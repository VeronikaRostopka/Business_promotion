interface SupportFeature {
  icon: string;
  text: string;
}

interface CustomerSupportProps {
  title: string;
  subtitle: string;
  description: string;
  features: SupportFeature[];
}

export const CustomerSupport = ({ 
  title, 
  subtitle, 
  description, 
  features 
}: CustomerSupportProps) => {
  return (
    <section className="customer-support">
      <div className="support-content">
        <div className="support-image">
          <img 
            src="/images/customer-support-illustration.svg" 
            alt="Customer Support illustration" 
          />
        </div>
        
        <div className="support-text">
          <span className="subtitle">{subtitle}</span>
          <h2>{title}</h2>
          <p className="description">{description}</p>
          
          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <img src={feature.icon} alt="" className="feature-icon" />
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 