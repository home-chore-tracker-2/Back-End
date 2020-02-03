
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chores').del()
    .then(function () {
      // Inserts seed entries
      return knex('chores').insert([
        { child_id: '1', choreName: "Make Bed", description: 'Tuck in sides w/ pillows on top.', points: 10, bonusPoints: 0, dueDate: '02/07/2020', picture: '', completed: false },
        { child_id: '1', choreName: "Pick Up Toys", description: 'Put them away in their spots, not shoved in closet.', points: 10, bonusPoints: 0, dueDate: '02/04/2020', picture: '', completed: false },
        { child_id: '1', choreName: "Water Flowers", description: 'Do not drown the petunias!.', points: 20, bonusPoints: 0, dueDate: '02/05/2020', picture: '', completed: false },
      
      ]);
    });
};
