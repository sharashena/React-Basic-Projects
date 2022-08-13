import { useState, useContext, createContext } from "react";
import { useFetch } from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("avengers");
  const { data: movies, loading, error } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        movies,
        query,
        setQuery,
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
