import {
  useEffect,
  useReducer,
  useContext,
  useCallback,
  createContext,
} from "react";
import cartItems from "./data";
import { reducer } from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const defaultStates = {
  cart: cartItems,
  loading: false,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStates);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = id => {
    const newItems = state.cart.filter(cartItem => cartItem.id !== id);
    dispatch({ type: "REMOVE_ITEM", payload: newItems });
  };

  const increase = id => {
    const tempCart = state.cart.map(cartItem => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    dispatch({ type: "INCREASE", payload: tempCart });
  };
  const decrease = id => {
    const tempCart = state.cart
      .map(cartItem => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter(cartItem => cartItem.amount !== 0);
    dispatch({ type: "DECREASE", payload: tempCart });
  };

  useEffect(() => {
    const { total, amount } = state.cart.reduce(
      (acc, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = amount * price;
        acc.amount += amount;
        acc.total += itemTotal;
        return acc;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    const safeInteger = total.toFixed(2);
    dispatch({ type: "GET_TOTAL", payload: { total: safeInteger, amount } });
  }, [state.cart]);

  const fetchData = useCallback(async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "FETCH_DATA", payload: cart });
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleAmount = (id, type) => {
    const tempCart = state.cart
      .map(cartItem => {
        if (cartItem.id === id) {
          if (type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter(cartItem => cartItem.amount !== 0);
    dispatch({ type: "TOGGLE_AMOUNT", payload: tempCart });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        toggleAmount,
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
