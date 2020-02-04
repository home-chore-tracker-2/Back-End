const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
};

function find() {
    return db('chores')
        .select('id', 'choreName', 'description', 'points', 'bonusPoints', 'dueDate', 'picture', 'completed');
}

function findBy(filter) {
    return db('chores')
        .where(filter);
}

async function add(chore) {
    const [id] = await db('chores')
        .insert(chore);

    return findById(id);
}

function findById(id) {
    return db('chores')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('chores')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this
        .find(id) : null));
}

function remove(id) {
    return db('chores')
        .where('id', id).del();
}