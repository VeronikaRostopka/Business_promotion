interface NavItem {
  text: string;
  href: string;
}

interface HeaderProps {
  logo: {
    src: string;
    alt: string;
  };
  navItems: NavItem[];
}

export const Header = ({ logo, navItems }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Логотип */}
        <div className="logo">
          <img src={logo.src} alt={logo.alt} />
        </div>

        {/* Навігація */}
        <nav className="nav-menu">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Кнопки */}
        <div className="header-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </header>
  );
}; 