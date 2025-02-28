import React from 'react';
import '../style/Header.css'
interface HeaderProps {
  logo: string;
  navItems: string[];
}

export const Header: React.FC<HeaderProps> = ({ logo, navItems }) => {
  return (
    <header className="header">
      <img src={logo} alt="Business Promotion Logo" className="logo" />
      <nav className="nav">
        {navItems.map((item, index) => (
          <a key={index} href={`#${item.toLowerCase()}`} className="nav-item">
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};