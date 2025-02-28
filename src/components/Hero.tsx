import React from 'react';
import { Button } from './Button'; // Імпортуємо Button, якщо він є

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <section className="hero">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      <Button label={buttonText} onClick={onButtonClick} />
    </section>
  );
};