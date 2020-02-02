import React from 'react';
import './ScrollCard.css';

const ScrollCard = (props) => {
  return (
    <div className="c-scroll-card">
      <h2 className="c-scroll-card__title">Card: {props.cardOrder}</h2>
      <p className="c-scroll-card__body">Content</p>
    </div>
  );
};

export default ScrollCard;