const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    getChildChoreTasks,
};

function find() {
    return db('').select('id', 'child_id',);
}

function getChildChoreTasks(child_id) {
    return db('')
        .innerJoin('', '', '=', '.id')
        .where({  })
}

function findBy(filter) {
    return db('').where(filter);
}

async function add(menuItem) {
    const [id] = await db('').insert(menuItem);

    return findById(id);
}

function findById(id) {
    return db('')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('').where('id', id).update(changes).then(count => (count > 0 ? this.find(id) : null));
}

function remove(id) {
    return db('').where('id', id).del();
}