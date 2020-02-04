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

function getChildChores(child_id) {
    return db('child')
        .innerJoin('chores', 'chores.child_id', '=', 'child.id')
        .where({ 'child.id': child_id })
        .select('child.username', 'child.points', 'child.cleanStreak', 'child.id', 'chores.id as choreId', 'chores.choreName', 'chores.description', 'chores.points as chorePoints', 'chores.bonusPoints', 'chores.dueDate', 'chores.picture', 'chores.completed')
        .then(childChores => {
            if (childChores.length > 0) {
            const chores = childChores.map(chore => {
                const { choreId, choreName,description, chorePoints, bonusPoints, dueDate, picture, completed } = chore
                return {
                    choreId,
                 choreName,
                 description,
                 chorePoints, dueDate, picture, completed, bonusPoints
                }
            })
            const [child] = childChores
            const { id, username, points, cleanStreak} = child
            return {
                id,
                username,
                points,
                cleanStreak,
                chores
            }} else {
                return findById(child_id).then(child => {
                    return {
                        ...child,
                        chores: []
                    }
                })
            }
        })
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