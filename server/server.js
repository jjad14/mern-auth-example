const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser =  require('cookie-parser');
const cors = require("cors");
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');

dotenv.config();

// create express app
const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: [
        "http://localhost:3000",
      ],
      credentials: true,
    })
);

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/customer', customerRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));