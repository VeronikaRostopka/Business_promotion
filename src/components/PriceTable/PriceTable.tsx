interface PriceFeature {
  text: string;
}

interface PricePlan {
  name: string;
  description: string;
  price: number;
  features: PriceFeature[];
  isPopular?: boolean;
}

interface PriceTableProps {
  title: string;
  subtitle: string;
  plans: PricePlan[];
}

export const PriceTable = ({ title, subtitle, plans }: PriceTableProps) => {
  return (
    <section className="price-table">
      <div className="price-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      
      <div className="price-plans">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`price-card ${plan.isPopular ? 'popular' : ''}`}
          >
            <h3>{plan.name}</h3>
            <p className="description">{plan.description}</p>
            
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="currency">$</span>
              <span className="period">Per month</span>
            </div>
            
            <ul className="features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature.text}</li>
              ))}
            </ul>
            
            <button className="order-button">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}; 