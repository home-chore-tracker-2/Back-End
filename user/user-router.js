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

router.get('/:id', authenticate, (req, res) => {

    const payload = {
        id:0,
        username: '',
        email: '',
        children: []
    }
    User.findById(req.params.id)
        .then(user => {
            payload.id = user.id
            payload.username = user.username
            payload.email = user.email
        })
        .catch(err => res.send(err));

    User.getUserChild(req.params.id)
        .then(children => {
            payload.children = children
            res.status(200).json(payload)
        })
        .catch(err => res.send(err));
})

router.get('/child', authenticate, (req, res) => {
    Child.find()
        .then(child => {
            res.json(child);
        })
        .catch(err => res.send(err));
});

module.exports = router;