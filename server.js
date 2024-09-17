import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import customerRoutes from './routes/customerRoutes.js';
import pinRoutes from './routes/pinRoutes.js';  // Import the pin routes
import connectDB from './config/database.js';  // Import the database connection

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));

// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/pins', pinRoutes); // Register the pin routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
