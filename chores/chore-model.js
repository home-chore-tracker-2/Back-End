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
    return db('choreTasks').select('id', 'choreName', 'choreType', 'description', 'basePoints', 'bonusPoints', 'dueDate', 'picture', 'completed');
}

function findBy(filter) {
    return db('choreTasks').where(filter);
}

async function add(chore) {
    const [id] = await db('choreTasks').insert(chore);

    return findById(id);
}

function findById(id) {
    return db('choreTasks')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('choreTasks').where('id', id).update(changes).then(count => (count > 0 ? this.find(id) : null));
}

function remove(id) {
    return db('choreTasks').where('id', id).del();
}