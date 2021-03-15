import * as actionTypes from '../actions/actionTypes'

const initialState = {
  value: '',
  data: null,
  error: false,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.GET_API_REQUEST:
        return {
          ...state,
          value: action.inputValue,
          loading: true
        }
    case actionTypes.GET_DATA_SUCCESS: 
        return {
          data: action.data.items.map(item => ({
            name: item.name,
            description: item.description,
            author: item.owner.login,
            authorAvatar: item.owner.avatar_url,
            stars: item.stargazers_count,
            id: item.owner.id
          })),
          loading: false
        }
    case actionTypes.GET_DATA_FAILED: 
        return {
          ...state, 
          error: true
        }
  default: return state  
  }
}

export default reducer