import { CHANGE_SEARCH_FIELD } from "./constansts";

const initialState = {
  searchField: ''
}

export const searchRobuds = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD: 
      return { ...state, searchField: action.payload }
    default:
      return state;
  }
}