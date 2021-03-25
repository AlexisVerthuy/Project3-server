require("dotenv").config();
require("../config/dbConnection");
const Recipe = require('../models/Recipe');


const recipes = [
    {
        title: "Bolognese Pasta",   
        serving: 4,
        picture: "https://thecozycook.com/wp-content/uploads/2019/08/Bolognese-Sauce.jpg",
        level: "Medium",
        duration: 20,
        ingredients: [
            {
                quantity: 1,
                unit: "others",
                value: "olive oil",
            },
            {
                quantity: 450,
                unit: "grams",
                value: "lean ground beef",
            },
            {
                quantity: 1,
                unit: "others",
                value: "salt",
            },
            {
                quantity: 1,
                unit: "others",
                value: "black pepper",
            },
            {
                quantity: 1,
                unit: "others",
                value: "onion diced",
            },
            {
                quantity: 2,
                unit: "others",
                value: "garlic cloves minced",
            },
            {
                quantity: 1,
                unit: "others",
                value: "oregano",
            },
            {
                quantity: 1,
                unit: "others",
                value: "basil",
            },
            {
                quantity: 1,
                unit: "others",
                value: "crushed red pepper",
            },
            {
                quantity: 450,
                unit: "grams",
                value: "crushed tomatoes",
            },
            {
                quantity: 20,
                unit: "grams",
                value: "tomato paste",
            },
            {
                quantity: 400,
                unit: "grams",
                value: "spaghetti or penne pasta",
            },
            {
                quantity: 1,
                unit: "others",
                value: "fresh basil",
            }],
        instructions: ["Step 1 : Bring a large pot of salted water to a boil. Add pasta and cook al dente according to package instructions; drain. Reserve 1/2 cup pasta water", "Step 2 : Heat the olive oil in a large deep saute pan. Add the beef and season with salt and pepper. Brown the beef and break it into smaller pieces with the back of a wooden spoon until cooked through", "Step 3 : Add onions and garlic; and season with oregano, basil and crushed red pepper. Saute for about 5 minutes until they soften. Add crushed tomatoes and tomato paste and pasta water. Mix to combine, bring mixture to a boil and then simmer on low covered for 30 minutes", "Step 4 : Toss the pasta with the bolognese sauce and top with fresh basil, if desired."],
        creator: "Fernando Spaghetti",
        type: ["Lunch", "Diner"],
    }]


    Recipe.deleteMany() 
.then( Recipe.insertMany(recipes))
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
});