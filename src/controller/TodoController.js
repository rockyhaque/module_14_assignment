const TodoModel = require("../model/TodoModel"); 

// Create a new to-do item
exports.createTodo = (req, res) => {
    let reqBody = req.body;

    let UserName = req.headers['username'];
    let TodoDescription = reqBody['TodoDescription'];
    let TodoSubject = reqBody['TodoSubject'];
    let TodoStatus = 'New';
    let TodoUpdateDate = Date.now();
    let TodoCreateDate = Date.now();

    let postBody = {
        UserName: UserName,
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoStatus: TodoStatus,
        TodoCreateDate: TodoCreateDate,
        TodoUpdateDate: TodoUpdateDate,
    };

    TodoModel.create(postBody).then((result) => {
        res.status(201).json({ status: 'success', data: result });
    }).catch((err) => {
        res.status(404).json({ status: err });
    });
};

// Get all to-do items for a specific user
exports.selectTodo = (req, res) => {
    let UserName = req.headers['username'];

    TodoModel.find({ UserName: UserName }).then((result) => {
        res.status(200).json({ status: 'success', data: result });
    }).catch((err) => {
        res.status(404).json({ status: err });
    });
};

// Update a specific to-do item
exports.updateTodo = (req, res) => {
    let reqBody = req.body;

    let TodoSubject = reqBody['TodoSubject'];
    let TodoDescription = reqBody['TodoDescription'];
    let _id = req.body['_id'];
    let TodoUpdateDate = Date.now();

    let postBody = {
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoUpdateDate: TodoUpdateDate,
    };

    TodoModel.updateOne({ _id: _id }, { $set: postBody }, { $upset: true }).then((result) => {
        res.status(200).json({ status: 'success', data: result });
    }).catch((err) => {
        res.status(404).json({ status: err });
    });
};

// Delete a specific to-do item
exports.deleteTodo = (req, res) => {
    let _id = req.body['_id'];

    TodoModel.deleteOne({ _id: _id }, { $upset: true }).then((result) => {
        res.status(200).json({ status: 'success', data: result });
    }).catch((err) => {
        res.status(404).json({ status: err });
    });
};

// Update the status of a specific to-do item
exports.statusUpdateTodo = (req, res) => {
    let reqBody = req.body;
    let TodoStatus = reqBody['TodoStatus'];
    let _id = req.body['_id'];
    let TodoUpdateDate = Date.now();

    let postBody = {
        TodoStatus: TodoStatus,
        TodoUpdateDate: TodoUpdateDate,
    };

    TodoModel.updateOne({ _id: _id }, { $set: postBody }, { $upset: true }).then((result) => {
        res.status(200).json({ status: 'success', data: result });
    }).catch((err) => {
        res.status(404).json({ status: err });
    });
};
