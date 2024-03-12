const express = require('express');
const { createProfile, userLogin, selectProfile, profileUpdate } = require('../controller/userController');
const { createTodo, selectTodo, updateTodo, statusUpdateTodo, deleteTodo } = require('../controller/TodoController');
const AuthMiddleware = require('../middleware/AuthMiddleware');

const router = express.Router();

// Routes for user-related operations
router.post('/createProfile', createProfile);         
router.post('/userLogin', userLogin);                 // Route for user login
router.get('/selectProfile', AuthMiddleware, selectProfile);  
router.post('/profileUpdate', AuthMiddleware, profileUpdate); 

// Routes for to-do list operations
router.get('/selectTodo', AuthMiddleware, selectTodo);      
router.post('/createTodo', AuthMiddleware, createTodo);     
router.post('/statusUpdateTodo', AuthMiddleware, statusUpdateTodo); 
router.post('/updateTodo', AuthMiddleware, updateTodo);     
router.get('/deleteTodo', AuthMiddleware, deleteTodo);      

module.exports = router;
