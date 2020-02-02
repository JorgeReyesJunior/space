import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux' 
import ScrollCard from '../ScrollCard/ScrollCard';
import './ScrollTrack.css';

const ScrollTrack = () => {
  const [transformZ, setTransformZ] = useState();
  const stylesReducer = useSelector(state => state.stylesReducer);
  const transformZValue = stylesReducer.transformZValue;
  const allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const scrollTrackStyles = {
    transform: `translateZ(${transformZ}px)`
  }

  useEffect(() => {
    setTransformZ(transformZValue);
  }, [transformZValue])
  
  return (
    <div className="o-scroll-track" style={scrollTrackStyles}>
      {allCards.map((card, i) => {
        return <ScrollCard key={`${card}-${i}`} cardOrder={card} />
      })}
    </div>
  );
};

export default ScrollTrack;