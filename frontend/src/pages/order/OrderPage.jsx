import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ChevronLeft } from 'lucide-react';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import OrderHistory from './components/OrderHistory';

const OrderPage = () => {
  const { cart, clearCart, orders, fetchOrders, url, token, setCart } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);

  const subtotal = Array.isArray(cart) ? cart.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
  const tax = subtotal * 0.18;
  const deliveryFee = subtotal >= 500 ? 0 : 50;
  const total = subtotal + tax + deliveryFee;

  useEffect(() => {
    fetchOrders();
  }, []);

  const placeOrder = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${url}/api/order`, { 
        items: cart.map(item => ({ menuItemId: item._id, quantity: item.quantity })),
        totalAmount: total
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchOrders();
      toast.success('Order placed successfully');
      clearCart();
    } catch (error) {
      console.error('Order error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCart(prevCart => prevCart.map(item =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item._id !== itemId));
  };
  
  return (
    <div className="min-h-screen bg-orange-50 py-8">
      <button className='mx-[5%] flex items-center gap-2 bg-white p-2 border rounded-md text-orange-500 mb-8' onClick={() => window.history.back()}>
        <ChevronLeft />
      </button>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Section */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <CartItem
                      key={item._id}
                      item={item}
                      handleQuantityChange={handleQuantityChange}
                      handleRemoveItem={handleRemoveItem}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <OrderSummary
              subtotal={subtotal}
              tax={tax}
              deliveryFee={deliveryFee}
              total={total}
              placeOrder={placeOrder}
              cart={cart}
              loading={loading}
            />
          </div>
        </div>

        {/* Order History */}
        <OrderHistory orders={orders} />
      </div>
    </div>
  );
};

export default OrderPage;