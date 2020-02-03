const router = require('express').Router();

const User = require('./user-model');
const Child = require('../child/child-model');
const authenticate = require('../auth/authenticate-middleware');

router.get('/', authenticate, (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

router.get('/child', authenticate, (req, res) => {
    Child.find()
        .then(child => {
            res.json(child);
        })
        .catch(err => res.send(err));
});

module.exports = router;