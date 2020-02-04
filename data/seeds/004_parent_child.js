
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('parent_child').del()
    .then(function () {
      // Inserts seed entries
      return knex('parent_child').insert([
        { parent_id: '', child_id: ''},
      ]);
    });
};
