import React from 'react';
import { XIcon } from 'lucide-react';

const CartItem = ({ item, handleQuantityChange, handleRemoveItem }) => {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="bg-gray-200 text-gray-800 px-[0.65rem] py-1 rounded-l-md hover:bg-orange-300 transition"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item._id, Number(e.target.value))}
              className="w-16 py-1 border-t border-b border-gray-300 text-center"
              style={{ appearance: 'textfield' }}
            />
            <button
              onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded-r-md hover:bg-orange-300 transition"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-semibold">₹{item.price * item.quantity}</p>
        <button
          onClick={() => handleRemoveItem(item._id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;