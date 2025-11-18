const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const path = require('path');

// Routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

// Setting up environment variables
require('dotenv').config();
console.log('Loaded CLIENT_URL:', process.env.CLIENT_URL);

// Connection to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 1111;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Connect routes with routers
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  })
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});