import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from '../action/constants';

const initialState = {
  loading: false,
  error: null,
  user: null
}

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return{
        loading: true,
        user: null,
        error: null
      }
      case FETCH_USER_SUCCESS:
        return {
          loading: false,
          user: action.payload.user,
          error: null
        }
      case FETCH_USER_FAILED:
        return {
          loading: false,
          user: null,
          error: action.payload.error
        }
      default: 
        return state
  }
}

export default fetchUserReducer;