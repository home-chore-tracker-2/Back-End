const router = require('express').Router();

const Chore = require('./chore-model');

// endpoints for Chores

// GET all chores

router.get('/', (req, res) => {
    Chore.find()
        .then(chores => {
            res.status(200).json(chores);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving the chores' })
        })
})

// POST a new chore

router.post('/', (req, res) => {
    Chore.add(req.body)
        .then(chore => {
            res.status(201).json(chore);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error adding the chore' });
        })
})

// PUT request to edit a chore

router.put('/:id', (req, res) => {
    const edits = req.body;
    Chore.update(req.params.id, edits)
        .then(chore => {
            if (chore) {
                res.status(200).json(chore);
            } else {
                res.status(404).json({ message: 'The chore could not be found' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error updating the chore' });
        })
})

// DEL endpoint to remove a chore

router.delete('/:id', (req, res) => {
    Chore.remove(req.params.id)
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'Chore successfully deleted', removed });
            } else {
                res.status(404).json({ message: 'The chore with that ID does not exist' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'The chore could not be deleted' });
        })
})

module.exports = router;