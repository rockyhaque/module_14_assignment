const mongoose = require('mongoose');

// Define the schema for the to-do list item
const DatabaseSchema = mongoose.Schema({
    UserName: { type: String },            // User name associated with the to-do item
    TodoSubject: { type: String },         // Subject or title of the to-do item
    TodoDescription: { type: String },     // Description of the to-do item
    TodoStatus: { type: String },          // Status of the to-do item (e.g., New, In Progress, Completed)
    TodoCreateDate: { type: Date },        // Date and time when the to-do item was created
    TodoUpdateDate: { type: Date },        // Date and time when the to-do item was last updated
}, {
    timestamps: true,                      // Automatically add createdAt and updatedAt fields
    versionKey: false                      // Do not include version key in documents
});

// Create a Mongoose model based on the schema
const TodoModel = mongoose.model('List', DatabaseSchema);

// Export the model to be used in other parts of the application
module.exports = TodoModel;
