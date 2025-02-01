import Menu from '../models/menu.model.js';

export const getMenuItems = async (req, res) => {
    try {
        const menuItems = await Menu.find();
        res.status(200).json(menuItems);
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const addMenuItem = async (req, res) => {
    try {
        const { name, price, category, availability, image } = req.body;

        if (!name || !price || !category || availability === undefined || !image) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }

        const newMenuItem = new Menu({ name, price, category, availability, image });
        await newMenuItem.save();

        res.status(201).json(newMenuItem);
    } catch (error) {
        console.error('Error adding menu item:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, category, availability, image } = req.body;

        if (!name || !price || !category || availability === undefined || !image) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }

        const updatedMenuItem = await Menu.findByIdAndUpdate(
            id,
            { name, price, category, availability, image },
            { new: true }
        );

        if (!updatedMenuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(200).json(updatedMenuItem);
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedMenuItem = await Menu.findByIdAndDelete(id);

        if (!deletedMenuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ message: 'Server error' });
    }
};