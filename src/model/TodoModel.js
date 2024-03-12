const mongoose = require('mongoose');

// Define the schema for the to-do list item
const DatabaseSchema = mongoose.Schema({
    UserName: { type: String },            
    TodoSubject: { type: String },         
    TodoDescription: { type: String },    
    TodoStatus: { type: String },          
    TodoCreateDate: { type: Date },        
    TodoUpdateDate: { type: Date },        
}, {
    timestamps: true,                      
    versionKey: false                      
});

// Create a Mongoose model based on the schema
const TodoModel = mongoose.model('List', DatabaseSchema);

// Export the model to be used in other parts of the application
module.exports = TodoModel;
