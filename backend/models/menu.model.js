import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["Appetizers", "Main Course", "Desserts"],
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;