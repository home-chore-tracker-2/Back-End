exports.up = function(knex) {
    return knex.schema.createTable('child', tbl => {
        tbl.increments();
        tbl.text('name')
            .notNullable();
        tbl.integer('points', 10)
            .notNullable()
            .unsigned();
        tbl.boolean('cleanStreak', false)
        .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('child');
};
