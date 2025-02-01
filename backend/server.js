import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { connectDB } from './config/db.js';
import userRoutes from './routes/user.route.js';
import menuRoutes from './routes/menu.route.js';
import orderRoutes from './routes/order.route.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/api/', userRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/', orderRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});