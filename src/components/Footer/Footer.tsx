import '../../styles/Footer.css';

interface SocialLink {
  icon: string;
  href: string;
  name: string;
}

interface FooterProps {
  logo: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
  sections: {
    title: string;
    links: string[];
  }[];
}

export const Footer = ({ logo, socialLinks, sections }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo.src} alt={logo.alt} className="footer-logo" />
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="social-link"
                title={`Visit our ${link.name}`}
                aria-label={`Visit our ${link.name}`}
              >
                <img src={link.icon} alt={link.name} />
              </a>
            ))}
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="footer-section">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-subscribe">
          <h3>knowing you're always on the best energy deal.</h3>
          <div className="subscribe-form">
            <input 
              type="tel" 
              placeholder="Enter your phone number" 
              className="phone-input"
            />
            <button className="sign-up-btn">Sign up Now</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Made With Love By Figmaland All Right Reserved</p>
      </div>
    </footer>
  );
}; 