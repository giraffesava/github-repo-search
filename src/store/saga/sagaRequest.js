import {call, put, delay, takeLatest} from 'redux-saga/effects'
import * as actions from '../actions/index'
import * as actionTypes from '../actions/actionTypes'
import {getRepos} from '../api'

function* sagaRequestWorker({inputValue}){
    try{
      const data = yield call(getRepos, inputValue)
      yield delay(1000)
      yield put(actions.getDataSuccess(data))
    } catch (error) {
      yield put(actions.getDataFailed())
    }
}

export function* apiWatcher() {
  yield takeLatest(actionTypes.GET_API_REQUEST, sagaRequestWorker);
}
