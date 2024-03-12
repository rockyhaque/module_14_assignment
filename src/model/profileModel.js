const mongoose = require('mongoose');

// Define the schema for the user profile
const DatabaseSchema = mongoose.Schema({
    email: { type: String },        
    firstName: { type: String },    
    lastName: { type: String },     
    password: { type: String },     // Password of the user (Note: It's recommended to hash passwords before saving)
    UserName: { type: String },     
    number: { type: String },       
    country: { type: String },      
}, {
    timestamps: true,               
    versionKey: false               
});

// Create a Mongoose model based on the schema
const profileModel = mongoose.model('users', DatabaseSchema);


module.exports = profileModel;
