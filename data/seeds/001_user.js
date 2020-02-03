const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {username: 'ryankayne', password: "test", email: "coope1rk@gmail.com"},
        {username: 'dummy1', password: "dummy1", email: "dummy1@email.com"},
        {username: 'dummy2', password: "dummy2", email: "dummy2@email.com"},

      ]);
    });
};
