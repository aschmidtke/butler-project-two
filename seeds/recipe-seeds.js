const { Recipe, User } = require('../models');

const recipeData = [
    {
        title: 'French Onion Soup',
        ingredients: 'onions, butter, beef broth, gruyere',
        directions: 'Caramelize onions in butter, add beef broth, and simmer. Spoon into a bowl and top with gruyere',
        user_id: 1
    },
    {
        title: 'Beef Tacos',
        ingredients: 'ground beef, cumin, onions, salsa, cheese, flour tortilla',
        directions: 'Brown beef over medium-high heat, add cumin, salt and pepper. Spoon onto flour tortilla and top with salsa and cheese',
        user_id: 2
    },
    {
        title: 'BLT sandwich',
        ingredients: 'bacon, lettuce, tomato, mayo, bread',
        directions: 'Toast bread, spread mayo across one slice, top with lettuce, bacon and tomato',
        user_id: 3
    },
    {
        title: 'Lasagna',
        ingredients: 'ground beef, tomato sauce, mozzarella, ricotta, lasagne noodles',
        directions: 'Brown beef over medium-high, and add tomato sauce. Cook lasagne noodles in salted water until mostly cooked through. Layer sauce, noodles, ricotta and mozzarella in desired amount of layers in a 13x9 pan and bake at 350 for 30 minutes.',
        user_id: 4
    },
    {
        title: 'Cous cous',
        ingredients: 'cous cous, butter, onion',
        directions: 'Chop and sautee onion untl lightly browned. Add 1 cup of cous cous, and 1.25 cups of boiling water to your pot and cover. Cook for 8 minutes, stiring occasionally. Add salt to taste.',
        user_id: 1
    },
    {
        title: 'Egg Salad',
        ingredients: 'eggs, mayo, mustard, herbs, onion',
        directions: 'Hard boil eggs, cool, peel and chop. In a mixing bowl, add your eggs, mayo, mustard with chopped chives and onion. Stir to combine.',
        user_id: 2
    },
    {
        title: 'Scrambled Eggs',
        ingredients: 'butter, eggs',
        directions: 'Add a small pad of butter to a non-stick pan over medium heat. In a bowl, crack desired amount of eggs with a pinch of salt. Whisk eggs until yolks and whites are combined. Add to pan and stir until cooked.',
        user_id: 3
    },
    {
        title: 'Mashed potatoes',
        ingredients: 'potatoes, butter, milk',
        directions: 'Boil a large pot of salted water and peel desired amount of potatoes and cut to equal sizes. When water is boiling, add potatoes and cook until fork-tender. Drain the potatoes, and add to a mixer. Add butter, milk, salt and pepper and mix until creamy with desired taste.',
        user_id: 4
    },
    {
        title: 'Salsa Verde',
        ingredients: 'jalapeno, garlic, cilantro, lime, olive oil',
        directions: 'Bring a pot of water to a boil. Add jalapenos and peeled garlic and cook until tender. In a blender, add cooked jalapenos and garlic with cilantro and the juice of 1 lime. Add olive oil until desired consistency.',
        user_id: 1
    },
    {
        title: 'Pesto',
        ingredients: 'basil, pinenuts, garlic, romano cheese, olive oil',
        directions: 'Destem basil and add to a food process with remaining ingredients. Blend until you have a chunky paste',
        user_id: 2
    }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;