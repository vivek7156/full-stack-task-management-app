import { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Plus } from 'lucide-react';
import ConfirmDeleteModal from './components/ConfirmDeleteModal';
import AddToCartModal from './components/AddToCartModal';
import AddEditItemModal from './components/AddEditItemModal';
import MenuItemCard from './components/MenuItemCard';
import toast from 'react-hot-toast';

const MenuPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [previewItem, setPreviewItem] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Appetizers',
    availability: true,
    image: ''
  });
  const [quantity, setQuantity] = useState(1);
  const { menuItems, addMenuItem, updateMenuItem, deleteMenuItem, addToCart } = useContext(StoreContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await updateMenuItem(editingItem._id, formData);
    } else {
      await addMenuItem(formData);
    }
    setIsModalOpen(false);
    resetForm();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      price: item.price,
      category: item.category,
      availability: item.availability,
      image: item.image
    });
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (itemToDelete) {
      await deleteMenuItem(itemToDelete);
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      category: 'Appetizers',
      availability: true,
      image: ''
    });
    setEditingItem(null);
  };

  const openDeleteModal = (id) => {
    setItemToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const openPreviewModal = (item) => {
    setPreviewItem(item);
    setIsPreviewModalOpen(true);
  };

  const handleAddToCart = (itemId) => {
    const item = menuItems.find(item => item._id === itemId);
    if (!item.availability) {
      toast.error('Item is not available');
      return;
    }
    addToCart(itemId, quantity);
    setQuantity(1); 
    setIsPreviewModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-orange-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">Menu Items</h1>
          <button
            onClick={() => {
              resetForm();
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            <Plus size={20} /> Add 
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MenuItemCard
              key={item._id}
              item={item}
              onEdit={handleEdit}
              onDelete={openDeleteModal}
              onOrder={openPreviewModal}
            />
          ))}
        </div>

        <AddEditItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          editingItem={editingItem}
        />

        <ConfirmDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
        />

        <AddToCartModal
          isOpen={isPreviewModalOpen}
          onClose={() => setIsPreviewModalOpen(false)}
          item={previewItem}
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default MenuPage;