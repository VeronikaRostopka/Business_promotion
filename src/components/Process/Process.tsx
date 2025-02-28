interface ProcessStep {
  avatar: string;
  text: string;
}

interface ProcessProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export const Process = ({ title, subtitle, steps }: ProcessProps) => {
  return (
    <section className="process">
      <div className="process-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      
      <div className="process-steps">
        <div className="step-row">
          {steps.slice(0, 2).map((step, index) => (
            <div key={index} className="step-item">
              <img src={step.avatar} alt="" className="step-avatar" />
              <div className="step-text">{step.text}</div>
            </div>
          ))}
        </div>
        
        <div className="step-row">
          {steps.slice(2, 4).map((step, index) => (
            <div key={index} className="step-item">
              <img src={step.avatar} alt="" className="step-avatar" />
              <div className="step-text">{step.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="process-cta">
        <button className="contact-button">Contact our expert</button>
      </div>
    </section>
  );
}; 