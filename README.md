# To-Do List Project using Express.js

## Overview

This project is a simple to-do list application implemented using Express.js for the backend. It provides functionalities for user registration, user authentication using JWT token, managing user profiles, and performing CRUD operations on the to-do list.

## Project Requirements

1. **User Registration**: Users can register by providing necessary details like email, username, and password.

2. **User Login**: Registered users can log in using their credentials.

3. **User Authentication by JWT Token**: User authentication is implemented using JSON Web Tokens (JWT) for securing endpoints.

4. **User Profile Read**: Users can view their profile information after successful login.

5. **User Profile Update**: Users can update their profile details like username, email, etc.

6. **User To-Do List Create**: Users can create new to-do list items with a subject and description.

7. **User To-Do List Read**: Users can view their list of to-do items.

8. **User To-Do List Update**: Users can update existing to-do list items, including subject and description.

9. **User To-Do List Delete**: Users can delete to-do list items.

10. **User To-Do List Complete/Cancel Mark**: Users can mark to-do list items as complete or cancel them.

## Technologies Used

- Express.js: Backend web application framework for Node.js
- MongoDB: NoSQL database for storing user profiles and to-do list items
- Mongoose: MongoDB object modeling tool for Node.js
- JSON Web Tokens (JWT): For user authentication and authorization
- Helmet: Middleware for securing Express.js apps by setting various HTTP headers
- CORS: Middleware for enabling Cross-Origin Resource Sharing
- Rate Limiter: Middleware for limiting repeated requests to public APIs and/or endpoints

...
