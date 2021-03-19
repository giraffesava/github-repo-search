import {GET_API_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILED} from '../actions/index'

const initialState = {
  data: [],
  error: false,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case GET_API_REQUEST:
        return {
          ...state,
          loading: true,
          error: false,
        }
    case GET_DATA_SUCCESS: 
        return {
          ...state,
          data: action.data,
          loading: false,
          error: false,
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