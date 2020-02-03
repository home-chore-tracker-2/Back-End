const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('child').del()
    .then(function () {
      // Inserts seed entries
      return knex('child').insert([
        { username: 'child1', password: "child1", points: "", cleanStreak: false },
        { username: 'child2', password: "child2", points: "", cleanStreak: true },
        { username: 'child3', password: "child3", points: "", cleanStreak: false }
      ]);
    });
};
