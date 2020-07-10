import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ScrollCard from '../ScrollCard/ScrollCard';
import './ScrollTrack.css';

const ScrollTrack = () => {
  const axiosReducer = useSelector(state => state.axiosReducer);
  const stylesReducer = useSelector(state => state.stylesReducer);

  const [cards, setCards] = useState();
  const [transformZ, setTransformZ] = useState();
  
  const transformZValue = stylesReducer.transformZValue;

  const scrollTrackStyles = {
    transform: `translateZ(${transformZ}px)`
  }

  useEffect(() => {
    let useEffectAborted = false;

    if(!useEffectAborted) {
      setTransformZ(transformZValue);
    }
    
    return(
      () => {
        useEffectAborted = true;
      }
    )
  }, [transformZValue]);

  useEffect(() => {
    let useEffectAborted = false;

    if(!useEffectAborted && !cards) {
      let cards = axiosReducer.data.results;

      setCards(cards);
    }
    
    return(
      () => {
        useEffectAborted = true;
      }
    )
  }, [axiosReducer, cards]);

  if(cards) {
    return (
      <div className="o-scroll-track" style={scrollTrackStyles}>
        {
          cards.map((card, i) => {
            return (
              <ScrollCard
                key={`${card.name}-${i}`}
                cardOrder={i}
                card={card}
              />
            )
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default ScrollTrack;