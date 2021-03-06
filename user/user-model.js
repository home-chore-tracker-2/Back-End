const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    getUserChild
};

function find() {
    return db('user').select('id', 'username', 'email');
}

function findBy(filter) {
    return db('user').where(filter);
}

async function add(user) {
    const [id] = await db('user').insert(user);

    return findById(id);
}

function findById(id) {
    return db('user')
        .where({ id })
        .first();
}

function getUserChild(id) {
    return db('parent_child')
    .join('user', 'user.id', 'parent_child.parent_id')
    .join('child', 'child.id', 'parent_child.child_id')
    .where('parent_child.parent_id', id)
    .select('child.username', 'child.points', 'child.cleanStreak', 'child.id')
}