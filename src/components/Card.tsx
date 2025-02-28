import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};