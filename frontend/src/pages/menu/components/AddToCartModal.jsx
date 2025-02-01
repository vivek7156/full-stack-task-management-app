import React from 'react';

const AddToCartModal = ({ isOpen, onClose, item, quantity, setQuantity, handleAddToCart }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-orange-50 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-md">
        <h2 className="text-xl md:text-2xl font-bold mb-4">{item.name}</h2>
        <img src={item.image} alt={item.name} className="w-full h-40 md:h-56 object-cover rounded-md mb-4" />
        <p className="text-gray-600 mb-4">{item.category}</p>
        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">₹{item.price}</p>
        <div className="flex items-center mb-4">
          <div>
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="bg-gray-300 text-gray-800 px-[0.65rem] py-1 md:py-2 rounded-l-md hover:bg-orange-300 transition"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-12 md:w-16 p-1 md:p-2 border-t border-b border-gray-300 text-center"
              style={{ appearance: 'textfield' }}
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-300 text-gray-800 px-2 md:px-2 py-1 md:py-2 rounded-r-md hover:bg-orange-300 transition"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-3 md:px-4 py-1 md:py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => handleAddToCart(item._id)}
            className="px-3 md:px-4 py-1 md:py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;