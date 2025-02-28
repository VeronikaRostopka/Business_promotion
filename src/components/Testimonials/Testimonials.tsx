interface Testimonial {
  rating: number;
  text: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export const Testimonials = ({ title, subtitle, testimonials }: TestimonialsProps) => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="rating">
              {renderStars(testimonial.rating)}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="author">
              <img 
                src={testimonial.author.avatar} 
                alt={testimonial.author.name} 
                className="author-avatar"
              />
              <div className="author-info">
                <h4>{testimonial.author.name}</h4>
                <p>{testimonial.author.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 