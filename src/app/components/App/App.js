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
      if (!useEffectAborted) {
        try {
          const url = `https://swapi.co/api/people/1/`;
          await dispatch({
            type: `${actions.AXIOS_FETCH}`,
            payload: `${url}`
          });
        } catch (error) {
          await dispatch({
            type: `${actions.AXIOS_FETCH_FAILURE}`
          });
        }
      };
    }

    fetchData();

    return (
      () => {
        useEffectAborted = true;
      }
    )
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="o-app">
        <div className="o-app__header">LOADING DATA</div> 
      </div>
    );
  } else if (error) {
    return (
      <div className="o-app">
        <div className="o-app__header">ERROR FETCHING DATA: {`${error}`}</div> 
      </div>
    );
  } else if (data) {
    return (
      <div className="o-app">
        <div className="o-app__header">SUCCESSFULLY FETCHED DATA FROM: {`${data.url}`}</div> 
        <ScrollViewport />
      </div>
    );
  }

  return (null);
};
  

export default App;