const express = require('express');
const { createProfile, userLogin, selectProfile, profileUpdate } = require('../controller/userController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const { createTodo, selectTodo, updateTodo, statusUpdateTodo, deleteTodo } = require('../controller/TodoController');

const router = express.Router();

// Routes for user-related operations
router.post('/createProfile', createProfile);         // Route for creating a user profile
router.post('/userLogin', userLogin);                 // Route for user login
router.get('/selectProfile', AuthMiddleware, selectProfile);  // Route for selecting user profile (protected by authentication middleware)
router.post('/profileUpdate', AuthMiddleware, profileUpdate); // Route for updating user profile (protected by authentication middleware)

// Routes for to-do list operations
router.post('/createTodo', AuthMiddleware, createTodo);     // Route for creating a to-do item (protected by authentication middleware)
router.get('/selectTodo', AuthMiddleware, selectTodo);      // Route for selecting all to-do items for a user (protected by authentication middleware)
router.post('/updateTodo', AuthMiddleware, updateTodo);     // Route for updating a to-do item (protected by authentication middleware)
router.post('/statusUpdateTodo', AuthMiddleware, statusUpdateTodo); // Route for updating the status of a to-do item (protected by authentication middleware)
router.get('/deleteTodo', AuthMiddleware, deleteTodo);      // Route for deleting a to-do item (protected by authentication middleware)

module.exports = router;
