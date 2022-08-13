import { useEffect, useReducer, useContext, createContext } from "react";

import {
  LOADING,
  STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./reducer/actions";
import { reducer } from "./reducer/reducer";

const API_KEY = "https://hn.algolia.com/api/v1/search?";

const defaultState = {
  loading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchStories = async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: LOADING });
      dispatch({
        type: STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = id => {
    const newStory = state.hits.filter(item => item.objectID !== id);
    dispatch({ type: REMOVE_STORY, payload: newStory });
  };

  const handleSearch = query => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const handlePage = value => {
    if (value === "dec") {
      let nextPage = state.page - 1;
      if (nextPage < 0) {
        nextPage = state.nbPages - 1;
      }
      dispatch({ type: HANDLE_PAGE, payload: nextPage });
    }
    if (value === "inc") {
      let nextPage = state.page + 1;
      if (nextPage > state.nbPages - 1) {
        nextPage = 0;
      }
      dispatch({ type: HANDLE_PAGE, payload: nextPage });
    }
  };

  useEffect(() => {
    fetchStories(`${API_KEY}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        removeStory,
        handleSearch,
        handlePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
