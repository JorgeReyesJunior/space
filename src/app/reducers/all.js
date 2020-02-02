import { combineReducers } from 'redux'
import axiosReducer from './axiosReducer';
import stylesReducer from './stylesReducer';

const RootReducer = combineReducers({
  axiosReducer,
  stylesReducer
});

export default RootReducer;