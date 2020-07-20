import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import AppBackground from './AppBackground';
import ScrollViewport from '../ScrollViewport/ScrollViewport';
import localData from './db.json';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const axiosReducer = useSelector(state => state.axiosReducer);
  const { data, isLoading, error } = axiosReducer;

  useEffect(() => {
    let useEffectAborted = false;
    
    // async function fetchData() {
    //   try {
    //     // https://swapi.dev/about

    //     // TODO: future support for user input, allowing different url fetches. 
    //     // `https://swapi.dev/api/people`
    //     // `https://swapi.dev/api/starships`

    //     const url = `https://swapi.dev/api/planets/`;
    //     await dispatch({
    //       type: `${actions.AXIOS_FETCH}`,
    //       payload: `${url}`
    //     });
    //   } catch (error) {
    //     await dispatch({
    //       type: `${actions.AXIOS_FETCH_FAILURE}`
    //     });
    //   };
    // }

    async function fetchLocalData() {
      try {
        await dispatch({
          type: `${actions.AXIOS_FETCH}`,
          payload: localData
        });
      } catch (error) {
        await dispatch({
          type: `${actions.AXIOS_FETCH_FAILURE}`
        });
      };
    }
    
    if(!useEffectAborted && !data) {
      // fetchData();
      fetchLocalData();
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
        <AppBackground />
        <div className="o-app__header">
          <a className="c-button c-button--back" href="https://jorgeareyesjr.github.io/apps">{`Back to Apps`}</a>
          <p className="c-title">{`Loading data from: https://swapi.dev/`}</p>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="o-app">
        <AppBackground />
        <div className="o-app__header">
          <a className="c-button c-button--back" href="https://jorgeareyesjr.github.io/apps">{`Back to Apps`}</a>
          <p className="c-title">{`An error has occurred attempting to load data from: https://swapi.dev/`}</p>
          <p className="c-title--error">{`Using local data.`}</p>
        </div>
      </div>
    );
  } else if (data) {
    return (
      <div className="o-app">
        <AppBackground />
        <div className="o-app__header">
          <a className="c-button c-button--back" href="https://jorgeareyesjr.github.io/apps">{`Back to Apps`}</a>
          <p className="c-title">{`Original data provided by: https://swapi.dev/`}</p>
          <p className="c-prompt">Scroll to see more</p>
        </div> 
        <ScrollViewport />
      </div>
    );
  } else {
    return (null);
  }
};
  

export default App;