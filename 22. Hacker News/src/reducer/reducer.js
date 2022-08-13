import {
  LOADING,
  STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: false };
    case STORIES:
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: action.payload,
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };
    case HANDLE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      throw new Error(`there is an error within your "${action.type}"`);
  }
};
