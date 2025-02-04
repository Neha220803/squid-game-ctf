const mongoose = require('mongoose');

// Create a user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// Create a model for the user schema
const User = mongoose.model('User', userSchema);

// Controller function to register a user
const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Create a new user document
        const newUser = new User({
            email,
            password
        });

        // Save the user to MongoDB
        await newUser.save();

        // Send a response
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser };
