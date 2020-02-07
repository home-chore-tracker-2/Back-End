exports.up = function(knex) {
    return knex.schema.createTable('user', tbl => {
        tbl.increments();
        tbl.string('username', 128)
            .notNullable()
            .unique();
        tbl.string('password', 128)
            .notNullable();
        tbl.string('email', 128)
            .notNullable();
    })

    .createTable('child', tbl => {
        tbl.increments();
        tbl.text('username')
            .notNullable();
        tbl.text('password')
        tbl.integer('points', 10)
            .unsigned();
        tbl.boolean('cleanStreak', false);
    })

    .createTable('chores', tbl => {
        tbl.increments();
        tbl.integer('child_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('child')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.string('choreName', 128)
            .notNullable();
        tbl.string('description', 255)
            .notNullable();
        tbl.integer('points', 10)
            .notNullable()
            .unsigned();
        tbl.integer('bonusPoints', 10)
            .unsigned();
        tbl.date('dueDate', 255)
            .notNullable();
        tbl.binary('picture', 255);
        tbl.boolean('completed', false)
            .notNullable();
    })

    .createTable('parent_child', tbl => {
        tbl.increments();
        tbl.integer('parent_id')
            .unsigned()
                .notNullable()
                .references('id')
                .inTable('user')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        tbl.integer('child_id')
            .unsigned()
                .notNullable()
                .references('id')
                .inTable('child')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
    })
};



exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('parent_child')
    .dropTableIfExists('chores')
    .dropTableIfExists('child')
    .dropTableIfExists('user');
};
