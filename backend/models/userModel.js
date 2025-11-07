const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"] },
    password: { type: String, required: true }
}, { timestamps: true })

const User = mongoose.model("User", userSchema);

module.exports = User;