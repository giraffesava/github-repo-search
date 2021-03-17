import {call, put, delay, takeLatest} from 'redux-saga/effects'
import * as actions from '../actions/index'
import {GET_API_REQUEST} from '../actions/index'
import {getRepos} from '../api'

function* sagaRequestWorker({inputValue}){
    try{
      yield delay(1000)
      const data = yield call(getRepos, inputValue)
      const dataArr = data.items.map(item => ({
        name: item.name,
        description: item.description,
        author: item.owner.login,
        authorAvatar: item.owner.avatar_url,
        stars: item.stargazers_count,
        id: item.id,
        address: `https://github.com/` + item.owner.login
      }))
      yield put(actions.getDataSuccess(dataArr))
    } catch (error) {
      yield put(actions.getDataFailed())
    }
}

export function* apiWatcher() {
  yield takeLatest(GET_API_REQUEST, sagaRequestWorker);
}
