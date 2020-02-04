const jwt = require('jsonwebtoken');
const secret = require('.././secret.js');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        jwt.verify(authorization, secret.jwtSecret, function (error, decodedToken) {
            if (error) {
                res.status(401).json({ message: 'Invalid Credentials' });
            } else {
                req.token = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'Please login and try again' });
    }
};