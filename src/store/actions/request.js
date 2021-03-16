import {GET_API_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILED} from './index'

export const getApiRequest = (inputValue) => {
  return {
    type: GET_API_REQUEST,
    inputValue
  }
}

export const getDataSuccess = (data) => {
  return {
    type: GET_DATA_SUCCESS,
    data
  }
}

export const getDataFailed = () => {
  return {
    type: GET_DATA_FAILED
  }
}
