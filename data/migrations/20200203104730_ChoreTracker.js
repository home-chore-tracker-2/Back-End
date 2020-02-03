
exports.up = function(knex) {
    return knex.schema.createTable('choreTasks', tbl => {
        tbl.increments();
        tbl.integer('child_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('child')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.string('choreName', 128)
            .notNullable()
        tbl.string('choreType', 128)
            .notNullable();
        tbl.string('description', 255)
            .notNullable();
        tbl.integer('basePoints', 10)
            .notNullable()
            .unsigned();
        tbl.integer('bonusPoints', 10)
            .unsigned();
        tbl.string('dueDate', 255)
            .notNullable();
        tbl.string('picture', 255);
        tbl.boolean('completed', false)
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('choreTasks');
};
