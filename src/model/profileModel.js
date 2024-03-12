const mongoose = require('mongoose');

// Define the schema for the user profile
const DatabaseSchema = mongoose.Schema({
    email: { type: String },        // Email address of the user
    firstName: { type: String },    // First name of the user
    lastName: { type: String },     // Last name of the user
    password: { type: String },     // Password of the user (Note: It's recommended to hash passwords before saving)
    UserName: { type: String },     // Username of the user
    number: { type: String },       // Phone number of the user
    country: { type: String },      // Country of the user
}, {
    timestamps: true,               // Automatically add createdAt and updatedAt fields
    versionKey: false               // Do not include version key in documents
});

// Create a Mongoose model based on the schema
const profileModel = mongoose.model('users', DatabaseSchema);

// Export the model to be used in other parts of the application
module.exports = profileModel;
