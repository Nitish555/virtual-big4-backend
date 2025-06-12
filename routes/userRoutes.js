// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProtectedData, getProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Protected route
router.get('/protected', protect, getProtectedData);

// Profile route (standard JWT-protected)
router.get('/profile', protect, getProfile);

module.exports = router;