// import axios from 'axios';
import { takeLatest, /* call, */ put } from 'redux-saga/effects';
import actions from '../actions';

// function* fetchData(action) {
//   const url = action.payload;

//   try {
//     const response = yield call(
//       axios.get,
//       url
//     );
//     yield put(actions.fetchAxiosSuccess(response.data));
    
//   } catch(error) {
//     yield put(actions.fetchAxiosFailure(error));
//   }
// }

function* fetchLocalData(action) {
  const data = action.payload;

  yield put(actions.fetchAxiosSuccess(data.results));
}

export default function* AxiosSaga() {
  // yield takeLatest('AXIOS_FETCH', fetchData);
  yield takeLatest('AXIOS_FETCH', fetchLocalData);
};