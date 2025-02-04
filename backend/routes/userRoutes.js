const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

// POST route to register a user
router.post('/register', registerUser);

module.exports = router;

