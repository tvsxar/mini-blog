const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        mongoose.connection.once('open', () => {
            console.log('✅ Connected to:', mongoose.connection.name);
        });
        
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;