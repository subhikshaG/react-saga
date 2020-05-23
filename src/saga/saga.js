import { apiSuccess, apiFailure, API_REQUEST, apiLoading } from '../action/action';
import { call, put, takeLatest, takeEvery, delay } from 'redux-saga/effects';

const catFetch = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await res.json();
  return data[0].url;
};

const quoteFetch = async () => {
  const res = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  const data = await res.json();
  return data[0];
};

function* apiSaga() {
  console.log("saga");
  yield put(apiLoading(true));
  yield delay(2000);
  try {
    const catImageUrl = yield call(catFetch);
    const quoteText = yield call(quoteFetch);
    const payload = { catImageUrl, quoteText };
    yield put(apiLoading(false))
    yield put(apiSuccess(payload));
  } catch (error) {
    yield put(apiFailure(error));
  }
}

export function* rootSaga() {
  yield takeLatest(API_REQUEST, apiSaga);
}