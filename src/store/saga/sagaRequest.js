import {call, put, delay, takeLatest} from 'redux-saga/effects'
import * as actions from '../actions/index'
import {GET_API_REQUEST} from '../actions/index'
import {getRepos} from '../api'

function* sagaRequestWorker({inputValue}){
    try{
      yield delay(1000)
      const data = yield call(getRepos, inputValue)
      yield put(actions.getDataSuccess(data))
    } catch (error) {
      yield put(actions.getDataFailed())
    }
}

export function* apiWatcher() {
  yield takeLatest(GET_API_REQUEST, sagaRequestWorker);
}
