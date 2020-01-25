const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingLists,
    getInstructions

}

function getRecipes() {
    return db('recipes')
};

function getShoppingLists (id) {
    return db ('ingredients')
    .where('id', id)
    .first()
};

function getInstructions (id) {
    return db ('steps').join('recipes', 'recipes.id' , 'steps.recipes_id').select('steps.id', 'recipes.recipes_id, steps.instructions').where('recipes_id', id)
};
