import { takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import {apiRequest} from '../actions/request'

export function* sagaRequest(){
  yield takeEvery(actionTypes.API_REQUEST)
}
