const router = require('express').Router();

const Child = require('./child-model');

// endpoints for Children

// GET all children

router.get('/', (req, res) => {
    Child.find()
        .then(child => {
            res.status(200).json(child);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving the child' })
        })
})

router.get('/:id', (req, res) => {
    Child.getChildChores(req.params.id)
    .then(child => { 
        res.json(child);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving the child with chores' })
    })
})


// POST a new Child

router.post('/', (req, res) => {
    Child.add(req.body)
        .then(child => {
            res.status(201).json(child);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error adding the child' });
        })
})

// PUT request to edit a child

router.put('/:id', (req, res) => {
    const edits = req.body;
    Child.update(req.params.id, edits)
        .then(child => {
            if (child) {
                res.status(200).json(child);
            } else {
                res.status(404).json({ message: 'The child could not be found' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error updating the child' });
        })
})

// DEL endpoint to remove a child

router.delete('/:id', (req, res) => {
    Child.remove(req.params.id)
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'Child successfully deleted', removed });
            } else {
                res.status(404).json({ message: 'The child with that ID does not exist' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'The child could not be deleted' });
        })
})

module.exports = router;