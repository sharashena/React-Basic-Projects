export const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      return { ...state, cart: action.payload };
    case "GET_TOTAL":
      return {
        ...state,
        amount: action.payload.amount,
        total: action.payload.total,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA":
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case "TOGGLE_AMOUNT":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      throw new Error(`there is an error within your ${action.type}`);
  }
};
