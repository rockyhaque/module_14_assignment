const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    let token = req.headers['token'];

    // Verify the token
    jwt.verify(token, 'abc-xyz-10', function (err, decoded) {
        if (err) {
            // If verification fails, send a 401 Unauthorized response
            res.status(401).json({ status: 'fail', message: 'verification fail' });
        } else {
            // If verification succeeds, extract the data from the token
            let reqBody = decoded['data'];
            let username = reqBody.UserName;

            // Set the username in the request headers for future use
            req.headers.username = username;

            
            next();
        }
    });
};
