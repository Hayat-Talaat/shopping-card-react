import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { CartState, Action, CartContextType } from "../types/Products";

const initialState: CartState = {
  items: [],
  total: 0,
  notification: null,
};

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      let updatedItems = [...state.items];
      let newTotal = state.total;

      if (existingItem) {
        updatedItems = updatedItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        newTotal = updatedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      } else {
        updatedItems.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
        newTotal += action.payload.price * action.payload.quantity;
      }

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        notification: `Added ${action.payload.title} to the cart!`,
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const totalAfterRemoval = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        total: totalAfterRemoval,
        notification: null,
      };
    }

    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => useContext(CartContext);
