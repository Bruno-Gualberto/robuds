import { CHANGE_SEARCH_FIELD } from "./constansts";

export const setSearchField = text => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text
});