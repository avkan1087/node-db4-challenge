const express = require('express');

const db = require('./recipes-model');

const router = express.Router();


router.get('/', (req, res) => {
    db.getRecipes()
    .then(recipe => {
        res.json(recipe);
    })
    .catch(err => {
        console.log(err);
    res.status(500).json({ message: 'Failed to get schemes' });
    });
});


router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    
        db.getShoppingLists(id)
        .then(list => {
            if (list.length) {
            res.json(list);
            } else {
            res.status(404).json({ message: 'Could not find list for given recipe' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get list' });
        });
    });

router.get('/:id/instructions', (req, res) => {
const { id } = req.params;

    db.getInstructions(id)
    .then(steps => {
        if (steps.length) {
        res.json(steps);
        } else {
        res.status(404).json({ message: 'Could not find steps for given scheme' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get steps' });
    });
});

// router.get('/', (req, res) => {
//     db.getRecipes()
//     .then(recipe => {
//         res.json(recipe);
//     })
//     .catch(err => {
//         console.log(err);
//     res.status(500).json({ message: 'Failed to get schemes' });
//     });
// });


module.exports = router;