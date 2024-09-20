import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './cartActions';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existingItem = state.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return state.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...state, { ...item, quantity: 1 }];
      }
      
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
      
    case INCREASE_QUANTITY:
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case DECREASE_QUANTITY:
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );

    default:
      return state;
  }
};

export default cartReducer;
