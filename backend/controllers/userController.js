const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// Cookie options setup
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'Strict',
    maxAge: 30 * 24 * 60 * 60 * 1000,
}

// Register new user
async function registerUser(req, res) {
    try {
        let { username, email, password } = req.body;

        // Trim and normalize inputs
        email = email.trim().toLowerCase();
        username = username.trim();  

        // Basic validation
        if(!username || !email || !password) {
            return res.status(400).json({message: 'Please provide all required fields'});
        }

        // Check if user exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });

        // If user exists, return error
        if(existingUser) {
            return res.status(400).json({message: 'User with this email or username already exists'});
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Add new user
        const newUser = new User({ username, email, password: hashedPassword })
        await newUser.save();

        // Generate token
        const token = generateToken(newUser._id)

        // Set cookie
        res.cookie('token', token, cookieOptions);

        res.status(201).json({ message: "User registered successfully", user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email
        } });
    } catch (error) {
        console.error('Registration error:', error.message);
        res.status(500).json({message: 'Server error'});
    }
}

// Login existing user
async function loginUser(req, res) {
    try {
        let { email, password } = req.body;

        // Trim and normalize email
        email = email.trim().toLowerCase();

        // Basic validation
        if(!email || !password) {
            return res.status(400).json({message: 'Please provide all required fields'});
        }

        // Check if user exists
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({message: 'User not found'});
        }

        // Check if password is correct and return error if it`s incorrect
        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {
            return res.status(400).json({message: 'Wrong password'});
        }

        // Generate token and set cookies
        const token = generateToken(user._id);

        res.cookie('token', token, cookieOptions);

        res.status(200).json({ message: 'Login successfully', user: {
            id: user._id,
            username: user.username,
            email: user.email
        }})
    } catch (error) {
        console.error('Login error:', error.message);
        res.status(500).json({message: 'Server error'});
    }
}

// Logout
async function logoutUser(req, res) {
    res.cookie('token', '', { ...cookieOptions, maxAge: 1 })
    res.status(200).json({message: 'Logout successful'})
}

// Me
async function getMe(req, res) {
    res.json(req.user)
}

// Export functons
module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getMe
}