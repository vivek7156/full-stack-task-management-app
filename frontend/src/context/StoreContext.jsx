import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "https://full-stack-task-management-app-zbcx.onrender.com";
  const [token, setToken] = useState(localStorage.getItem("jwt") || "");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchMenuItems();
    fetchOrders();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get(`${url}/api/menu`);
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/orders`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const addMenuItem = async (formData) => {
    try {
      const response = await axios.post(`${url}/api/menu`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMenuItems([...menuItems, response.data]);
      toast.success('Menu item added successfully');
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  const updateMenuItem = async (id, formData) => {
    try {
      const response = await axios.put(`${url}/api/menu/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMenuItems(menuItems.map(item => item._id === id ? response.data : item));
      toast.success('Menu item updated successfully');
    } catch (error) {
      console.error('Error updating menu item:', error);
    }
  };

  const deleteMenuItem = async (id) => {
    try {
      await axios.delete(`${url}/api/menu/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMenuItems(menuItems.filter(item => item._id !== id));
      toast.success('Menu item deleted successfully');
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  const addToCart = (itemId, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === itemId);
      if (existingItem) {
        return prevCart.map(item =>
          item._id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        const menuItem = menuItems.find(item => item._id === itemId);
        return [...prevCart, { ...menuItem, quantity }];
      }
    });
    toast.success('Item added to cart');
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    url,
    setToken,
    token,
    username,
    setUsername,
    menuItems,
    fetchMenuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    cart,
    setCart,
    addToCart,
    clearCart,
    orders,
    fetchOrders
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
