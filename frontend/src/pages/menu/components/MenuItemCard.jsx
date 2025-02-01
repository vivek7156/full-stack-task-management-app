import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const MenuItemCard = ({ item, onEdit, onDelete, onOrder }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition hover:scale-103">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-40 md:h-56 object-cover rounded-md mb-4" 
      />
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg md:text-xl font-bold text-orange-500">{item.name}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(item)}
            className="p-2 text-gray-600 hover:text-orange-500 transition"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(item._id)}
            className="p-2 text-gray-600 hover:text-red-500 transition"
          >
            <Trash2 size={18} className='text-red-500' />
          </button>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <p className="text-sm md:text-base text-gray-600">{item.category}</p>
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs md:text-sm ${
            item.availability
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {item.availability ? 'Available' : 'Unavailable'}
        </span>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => onOrder(item)}
          className="bg-orange-500 text-white px-3 md:px-4 py-2 rounded-md hover:bg-orange-600 transition"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;