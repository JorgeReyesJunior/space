import { all } from 'redux-saga/effects';
import axiosSaga from './axiosSaga';
// import Api from '...'

export default function* RootSaga() {
  yield all([
    axiosSaga()
  ])
};