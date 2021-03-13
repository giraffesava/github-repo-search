import {call, put, takeEvery} from 'redux-saga/effects'
import * as actions from '../actions/index'
import * as actionTypes from '../actions/actionTypes'
import {getRepos} from '../api'

function* sagaRequestWorker({inputValue}){
  try{
    const data = yield call(getRepos, inputValue)
    yield put(actions.getDataSuccess(data))
  } catch (error) {
    yield put(actions.getDataFailed())
  }
}

export function* apiWatcher() {
  yield takeEvery(actionTypes.GET_API_REQUEST, sagaRequestWorker);
}