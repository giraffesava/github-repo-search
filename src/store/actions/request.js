import * as actionTypes from './actionTypes'

export const apiRequest = (inputValue) => {
  return {
    type: actionTypes.API_REQUEST,
    payload: inputValue
  }
}