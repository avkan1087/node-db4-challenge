
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, quantity: 6, ingredient_name: "chicken" ,instructions: 'sear for 10 min'},


        {id: 2, recipe_id: 2, quantity: 7, ingredient_name: "steak", instructions: 'sear for 5 min'},

        {id: 3, recipe_id: 3, quantity: 3, ingredient_name: "pork",  instructions: 'sear for 20 min'},

      ]);
    });
};
