import {GET_API_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILED} from '../actions/index'

const initialState = {
  value: '',
  data: [],
  error: false,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case GET_API_REQUEST:
        return {
          ...state,
          value: action.inputValue,
          loading: true
        }
    case GET_DATA_SUCCESS: 
        return {
          ...state,
          data: action.data,
          loading: false
        }
    case GET_DATA_FAILED: 
        return {
          ...state, 
          error: true,
          loading: false,
          data: []
        }
  default: return state  
  }
}

export default reducer