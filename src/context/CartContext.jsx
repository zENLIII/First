import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  console.log("Action:", action); // Log the action

  switch (action.type) {
    case "ADD_ITEM":
      // Check if the item is already in the cart
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        return state;
      }
      const newState = [...state, action.payload];
      console.log("New State after ADD_ITEM:", newState); // Log the new state
      return newState;
    case "REMOVE_ITEM":
      const filteredState = state.filter(
        (item) => item.id !== action.payload.id
      );
      console.log("New State after REMOVE_ITEM:", filteredState); // Log the new state
      return filteredState;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
