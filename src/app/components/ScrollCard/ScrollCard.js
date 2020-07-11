import React from 'react';
import './ScrollCard.css';

const ScrollCard = (props) => {
  return (
    <div className={`c-scroll-card c-scroll-card--${props.card.name}`}>
      {/* <h2 className="c-scroll-card__title">{props.card.name}</h2> */}
      <div className="c-scroll-card__body">
        <ul className="c-list">
          <li className="c-list__item">{props.card.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default ScrollCard;