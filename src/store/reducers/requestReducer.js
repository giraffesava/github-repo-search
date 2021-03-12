import * as actionTypes from '../actions/actionTypes'
import axios from 'axios'

const initialState = {
  value: ''
}

export const requestReducer = (state = initialState, action) => {
  return{
    type: actionTypes.API_REQUEST,
    value: action.payload
  }
}