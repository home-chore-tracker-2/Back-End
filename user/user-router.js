const router = require('express').Router();

const User = require('./user-model');
const authenticate = require('../auth/authenticate-middleware');

router.get('/', authenticate, (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;