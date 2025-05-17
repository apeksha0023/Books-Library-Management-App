const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const booksRoutes = require('./routes/booksRoutes');
const myBooksRoutes = require('./routes/myBooksRoutes');
const cors = require('cors');
const path = require('path');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

// CORS setup for your frontend dev server
app.use(cors({
  origin: 'http://localhost:5173',  // Your React dev server URL
  credentials: true,                // Allow cookies, authorization headers, etc.
}));

// API routes - order matters, place BEFORE any catch-all
app.use('/api/auth', authRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/mybooks', myBooksRoutes);

// Optionally serve frontend build in production (if you deploy)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'dist'))); // Adjust path as needed

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
} else {
  // In dev, no catch-all for API routes to avoid sending HTML to API calls
  app.get('*', (req, res) => {
    res.status(404).json({ message: "API route not found" });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
