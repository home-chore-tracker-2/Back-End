const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    getChildChores,
};

function find() {
    return db('child').select('id', 'username', 'points', 'cleanStreak');
}

function getChildChores(chore_id) {
    return db('child')
        .innerJoin('chores', 'child.chores_id', '=', 'chores.id')
        .where({ chore_id })
}

    // .select('sleepLog.date', 'sleepLog.wakeUpRating', 'sleepLog.dayRating', 'sleepLog.nightRating')
    // .join('users as u', 'u.id', 'sleepLog.user_id')
    // .where({user_id: id})


function findBy(filter) {
    return db('child')
        .where(filter);
}

async function add(child) {
    const [id] = await db('child').insert(child);

    return findById(id);
}

function findById(id) {
    return db('child')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('child')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this
        .find(id) : null));
    }

function remove(id) {
    return db('child')
        .where('id', id).del();
}