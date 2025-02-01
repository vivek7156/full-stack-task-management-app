import Menu from "../models/menu.model.js";
import Order from "../models/order.model.js";

export const getUsersOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orders = await Order.find({ userId }).populate('items.menuItemId').sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const createOrder = async (req, res) => {
    try {
        const userId = req.user._id;
        const { items, totalAmount } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: 'No items provided' });
        }

        const orderItems = [];
        for (const item of items) {
            const menuItem = await Menu.findById(item.menuItemId);
            if (!menuItem) {
                return res.status(400).json({ message: `Menu item with ID ${item.menuItemId} not found` });
            }
            orderItems.push({
                menuItemId: item.menuItemId,
                name: menuItem.name,
                price: menuItem.price,
                quantity: item.quantity
            });
        }

        const newOrder = new Order({
            userId,
            items: orderItems,
            totalAmount,
            status: 'Pending'
        });

        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
