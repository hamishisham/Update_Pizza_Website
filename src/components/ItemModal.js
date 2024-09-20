// src/components/ItemModal.js
import React from 'react';

const ItemModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <button onClick={onClose} className="text-red-500 font-bold">Close</button>
        <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded mt-4" />
        <h2 className="text-2xl font-semibold mt-4">{item.name}</h2>
        <p className="text-gray-700 mt-2">${item.price.toFixed(2)}</p>
        <button
          onClick={() => onClose(item)}
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
