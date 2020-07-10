import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../actions';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import './ScrollViewport.css';

const ScrollViewport = () => {
  const [ height, setHeight ] = useState();
  const scrollContainerRef = useRef();
  const dispatch = useDispatch();
  const scrollViewportStyle = {
    height: `${height}px`
  }


  useEffect(() => {
    let useEffectAborted = false;
    
    const scrollContainer = scrollContainerRef.current;
    const scrollContainerPerspective = window.getComputedStyle(scrollContainer);
    const scrollCards = scrollContainer.getElementsByClassName('c-scroll-card').length;
    const computedScrollContainerPerspective = parseInt(scrollContainerPerspective.perspective);
    const viewportHeight = (window.innerHeight + computedScrollContainerPerspective) * scrollCards - (50 * scrollCards);

    if(!useEffectAborted && !height) {
      setHeight(viewportHeight);
    }

    return (
      () => {
        useEffectAborted = true;
      }
    )
  }, [height]);
  
  useEffect(() => {
    let useEffectAborted = false;

    function updateView() {
      dispatch({
        type: `${actions.UPDATE_TRANSFORM_Z_VALUE}`,
        payload: window.pageYOffset
      });
    }

    if(!useEffectAborted) {
      window.addEventListener('scroll', updateView);
    }

    return (
      () => {
        window.removeEventListener('scroll', updateView);

        useEffectAborted = true;
      }
    )
  }, [dispatch]) 

  return (
    <div className="o-scroll-viewport" style={scrollViewportStyle}>
      <ScrollContainer ref={scrollContainerRef} />
    </div>
  );
};

export default ScrollViewport;