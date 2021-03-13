import { combineReducers } from "redux"
import reducer from './requestReducer'

export const rootReducer = combineReducers({
  repos: reducer
}) 