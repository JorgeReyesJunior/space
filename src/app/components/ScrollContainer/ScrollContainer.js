import React from 'react';
import ScrollTrack from '../ScrollTrack/ScrollTrack';
import './ScrollContainer.css';

const ScrollContainer = React.forwardRef((props, ref) => {
  return (
    <div className="o-scroll-container" ref={ref} >
      <ScrollTrack />
    </div>
  );
});

export default ScrollContainer;