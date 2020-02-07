const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../user/user-model');
const Child = require('../child/child-model');
const secret = require('.././secret.js');

const db = require('../data/dbConfig');
const authenticate = require('../auth/authenticate-middleware');

// endpoints for /api/auth
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    User.add(user)
        .then(saved => {
            res.status(201).json({ id: saved.id, username: saved.username });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    User.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ message: `Welcome ${user.username}!`, token });
            } else {
                res.status(401).json({ message: `You shall not pass!` });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/register/child', authenticate, (req, res) => {
    let user = req.body;
    const connector = { 
        parent_id: req.token.subject,
        child_id: 0
     }
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
     console.log(req.token)

    Child.add(user)
        .then(saved => {
            connector.child_id = saved.id
            console.log(connector)
        db('parent_child').insert(connector)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
        })
        .catch(error => {
            res.status(500).json(error);
        });
        
});

router.post('/login/child', (req, res) => {
    let { username, password } = req.body;

    Child.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ message: `Welcome ${user.username}!`, token });
            } else {
                res.status(401).json({ message: `You shall not pass!` });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: '24h',
    };
    return jwt.sign(payload, secret.jwtSecret, options)
}

module.exports = router;