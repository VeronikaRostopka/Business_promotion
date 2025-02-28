interface CallToActionProps {
  title: string;
  buttonText: string;
  image: string;
}

export const CallToAction = ({ title, buttonText, image }: CallToActionProps) => {
  return (
    <section className="cta">
      <div className="cta-content">
        <div className="cta-text">
          <h2>{title}</h2>
          <button className="cta-button">{buttonText}</button>
        </div>
        <div className="cta-image">
          <img src={image} alt="Product statistics" />
        </div>
      </div>
    </section>
  );
}; 