import * as actionTypes from './actionTypes'

export const getApiRequest = (inputValue) => {
  return {
    type: actionTypes.GET_API_REQUEST,
    inputValue
  }
}

export const getDataSuccess = (data) => {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    data
  }
}

export const getDataFailed = () => {
  return {
    type: actionTypes.GET_DATA_FAILED
  }
}