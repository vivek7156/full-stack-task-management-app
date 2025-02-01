import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      <div className="bg-white rounded-lg shadow">
        {orders.length === 0 ? (
          <p className="p-6 text-gray-500">No orders yet</p>
        ) : (
          <div className="divide-y-4 divide-orange-50">
            {orders.map((order) => (
              <div key={order._id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold">Order #{order._id.slice(-6)}</p>
                    <p className="text-gray-500">{new Date(order.createdAt).toLocaleString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div key={item._id} className="flex justify-between text-sm">
                      <span>{item.name} x {item.quantity}</span>
                      <div>
                        <span>₹{item.price * item.quantity} + </span>
                        <span className="text-gray-500">GST: ₹{(item.price * item.quantity * 0.18).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                  { order.totalAmount < 500 && (
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee</span>
                      <span>₹50</span>
                    </div>
                  )}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{order.totalAmount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;