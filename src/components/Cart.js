import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartActions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // Fixing the total price calculation
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('$', '')); // Remove dollar sign if present
    return total + itemPrice * item.quantity;
  }, 0).toFixed(2); // Keep two decimal places for the total

  return (
    <div className="bg-gray-100 py-16 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="text-right text-2xl font-bold mb-4">
            Total: ${totalPrice}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cart.map(item => (
              <li key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-900 font-semibold">Price: {item.price}</p>
                    <p className="text-gray-900 font-semibold">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="bg-gray-300 text-gray-700 rounded-lg px-2 py-1 hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-4 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="bg-gray-300 text-gray-700 rounded-lg px-2 py-1 hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="mt-4 w-full bg-red-500 text-white rounded-lg py-2 hover:bg-red-600"
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
