import { CartAction, CartItem, CartState } from "../types/cart.types";

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productToAdd = action.payload;

      const existingItem = state.items.find(
        (item) => item.product.id === productToAdd.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) => {
          if (item.product.id === productToAdd.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, items: updatedItems };
      }

      const newItem: CartItem = { product: productToAdd, quantity: 1 };
      return { ...state, items: [...state.items, newItem] };
    }

    default:
      return state;
  }
};
