import React from 'react';

interface FooterProps {
  contactInfo: string;
  links: { text: string; href: string }[];
}

export const Footer: React.FC<FooterProps> = ({ contactInfo, links }) => {
  return (
    <footer className="footer">
      <p className="footer-contact">{contactInfo}</p>
      <nav className="footer-nav">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="footer-link">
            {link.text}
          </a>
        ))}
      </nav>
    </footer>
  );
};