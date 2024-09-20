// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Your cart reducer

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;