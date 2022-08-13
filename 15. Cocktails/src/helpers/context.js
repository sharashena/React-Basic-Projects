import { useContext, createContext } from "react";
import { useFetch } from "./useFetch";
import { URL } from "./URL";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { cocktails, loading, setSearch } = useFetch(URL);
  return (
    <AppContext.Provider
      value={{
        setSearch,
        loading,
        cocktails,
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
