import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux' 
import actions from '../../actions';
import ScrollViewport from '../ScrollViewport/ScrollViewport';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const axiosReducer = useSelector(state => state.axiosReducer);
  const { data, isLoading, error } = axiosReducer;

  useEffect(() => {
    let useEffectAborted = false;
    
    async function fetchData() {
      try {
        // https://swapi.dev/about
        const url = `https://swapi.dev/api/people/1/`;
        await dispatch({
          type: `${actions.AXIOS_FETCH}`,
          payload: `${url}`
        });
      } catch (error) {
        await dispatch({
          type: `${actions.AXIOS_FETCH_FAILURE}`
        });
      };
    }
    
    if(!useEffectAborted && !data) {
      fetchData();
    }

    return (
      () => {
        useEffectAborted = true;
      }
    )
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <div className="o-app">
        <div className="o-app__header">
          <a href="https://jorgereyesjunior.github.io/">jorgereyesjunior.github.io</a>
          <p>LOADING DATA</p>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="o-app">
        <div className="o-app__header">
          <a href="https://jorgereyesjunior.github.io/">jorgereyesjunior.github.io</a>
          <p>ERROR FETCHING DATA: {`${error}`}</p>
        </div>
      </div>
    );
  } else if (data) {
    return (
      <div className="o-app">
        <div className="o-app__header">
          <a href="https://jorgereyesjunior.github.io/">jorgereyesjunior.github.io</a>
        </div> 
        <ScrollViewport />
      </div>
    );
  }

  return (null);
};
  

export default App;