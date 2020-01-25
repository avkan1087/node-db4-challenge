
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Grandma\s lasagna'},
        {id: 2, name: 'South of the border enchiladas'},
        {id: 3, name: 'Perfect Steak'}
      ]);
    });
};
