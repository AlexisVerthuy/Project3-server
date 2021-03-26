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
    },
    {
        title: "Chocolate Hazelnut Smoothie Bowl",
        serving: 2,
        picture: "https://feelgoodfoodie.net/wp-content/uploads/2021/03/Chocolate-Hazelnut-Smoothie-Bowl-5.jpg",
        level: "Easy",
        duration: 5,
        ingredients: [
            {
                quantity: 0.25,
                unit: "cups",
                value: "milk",
            },
            {
                quantity: 2,
                unit: "others",
                value: "frozen bananas",
            },
            {
                quantity: 1,
                unit: "others",
                value: "Nutella",
            },
            {
                quantity: 1,
                unit: "others",
                value: "cocoa powder",
            },
            {
                quantity: 1,
                unit: "others",
                value: "chocolate chips",
            },
            {
                quantity: 1,
                unit: "others",
                value: "chopped hazelnuts",
            },
            {
                quantity: 1,
                unit: "others",
                value: "cacao nibs",
            }],
        instructions: ["Step 1 : Place the milk into a high speed blender first. Then add the frozen bananas, Nutella and cacao powder.", "Step 2 : Blend thoroughly on high speed for 1 minute until the mixture is completely smooth. You may need to stop and scrape down the blender depending on the strength of the blender you’re using.", "Step 3 : Taste and adjust the flavor as needed, by adding a sweetener of choice for added sweetness or more cacao powder for a richer chocolate flavor.", "Step 4 : Pour into a bowl and top if off chocolate chips, hazelnuts and cacao nibs, if desired.", "Step 5 : Serve immediately for best flavor and consistency."],
        creator: "Yumna Jawad",
        type: ["Breakfast", "Snack"],
    },
    {
        title: "Smoked Salmon Bagel",
        serving: 2,
        picture: "https://feelgoodfoodie.net/wp-content/uploads/2021/03/smoked-salmon-bagel-10.jpg",
        level: "Easy",
        duration: 10,
        ingredients: [
            {
                quantity: 2,
                unit: "others",
                value: "bagels halved",
            },
            {
                quantity: 100,
                unit: "grams",
                value: "smoked salmon thinly sliced",
            },
            {
                quantity: 100,
                unit: "grams",
                value: "cream cheese",
            },
            {
                quantity: 1,
                unit: "others",
                value: "lemon juice",
            },
            {
                quantity: 2,
                unit: "others",
                value: "onion diced",
            },
            {
                quantity: 1,
                unit: "others",
                value: "fresh dill",
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
                quantity: 2,
                unit: "others",
                value: "Persian cucumbers peeled in ribbons",
            },
            {
                quantity: 50,
                unit: "grams",
                value: "red onion slices",
            },
            {
                quantity: 20,
                unit: "grams",
                value: "capers",
            }],
        instructions: ["Step 1 : In a small bowl, combine the cream cheese, lemon juice, fresh dill and salt and pepper, to taste.", "Step 2 :Toast the bagels, then spread the cream cheese mixture on both sides of the bagel. Add the cucumbers, smoked salmon, capers and red onions on the bottom of the toasted bagels. Top with the top of the bagels."],
        creator: "Mummy",
        type: ["Breakfast", "Lunch", "Diner", "Snack"],
    },
    {
        title: "Peanut Butter Banana Muffins",
        serving: 4,
        picture: "https://feelgoodfoodie.net/wp-content/uploads/2021/01/Peanut-Butter-Banana-Muffins-10.jpg",
        level: "Medium",
        duration: 15,
        ingredients: [
            {
                quantity: 3,
                unit: "others",
                value: "ripe bananas",
            },
            {
                quantity: 0.75,
                unit: "cups",
                value: "unsalted peanut butter room temperature",
            },
            {
                quantity: 1,
                unit: "others",
                value: "honey",
            },
            {
                quantity: 25,
                unit: "grams",
                value: "black pepper",
            },
            {
                quantity: 2,
                unit: "others",
                value: "eggs",
            },
            {
                quantity: 1,
                unit: "others",
                value: "vanilla",
            },
            {
                quantity: 1.25,
                unit: "cups",
                value: "oat flour",
            },
            {
                quantity: 1,
                unit: "others",
                value: "baking powder",
            },
            {
                quantity: 1,
                unit: "others",
                value: "baking soda",
            },
            {
                quantity: 1,
                unit: "others",
                value: "salt",
            },
            {
                quantity: 5,
                unit: "grams",
                value: "cinnamon",
            },
            {
                quantity: 1,
                unit: "others",
                value: "nutmeg",
            }],
        instructions: ["Step 1 : Preheat the oven to 375°F. Line a standard muffin pan with muffin papers.", "Step 2 : In a large bowl, beat the bananas with a hand mixer until well mashed.", "Step 3 : Add the peanut butter and honey. Beat until smooth. Add the eggs and vanilla. Beat on low until just combined.", "Step 4 : Combine the oat flour, baking powder, baking soda, salt and spices in a small bowl or large measuring cup. Stir to distribute.", "Step 5 : Transfer the dry ingredients to the wet and stir with a spatula until just combined. Do not over mix. Some small lumps are ok.", "Step 6 : Scoop the batter into the prepared muffin pan, filling the cups just below the top. Add sliced bananas, if using.", "Step 7 : Bake for 15-17 minutes, until a cake tester inserted in one of the center muffins comes out with just a couple crumbs. Allow to cool in the pan for 10 minutes before serving."],
        creator: "Alexis",
        type: ["Breakfast", "Snack"],
    },
    {
        title: "Chicken, Apple, and Brussels Sprout Sheet Pan Dinner",
        serving: 6,
        picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5078300.jpg&w=708&h=708&c=sc&poi=face&q=85",
        level: "Medium",
        duration: 55,
        ingredients: [
            {
                quantity: 2,
                unit: "cups",
                value: "brussels sprouts",
            },
            {
                quantity: 450,
                unit: "others",
                value: "red apple",
            },
            {
                quantity: 100,
                unit: "grams",
                value: "pancetta",
            },
            {
                quantity: 2,
                unit: "others",
                value: "olive oil",
            },
            {
                quantity: 1,
                unit: "others",
                value: "fresh rosemary",
            },
            {
                quantity: 6,
                unit: "others",
                value: "boneless chicken thighs",
            },
            {
                quantity: 1,
                unit: "others",
                value: "salt",
            },
            {
                quantity: 1,
                unit: "others",
                value: "pepper",
            }],
        instructions: ["Step 1: Preheat the oven to 425 degrees F (220 degrees C).", "Step 2: Toss Brussels sprouts, apple, and pancetta with 1 tablespoon olive oil and rosemary in a bowl. Spread into a single layer on a sheet pan.", "Step 3: Leave space on the pan for the chicken thighs. Toss chicken with the remaining 1 tablespoon oil in the same bowl; place on the sheet pan. Sprinkle salt and pepper on top.", "Step 4: Bake in the preheated oven, stirring the Brussels sprouts mixture every 15 minutes, until chicken is no longer pink in the center and the juices run clear, 40 to 45 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."],
        creator: "Meesh",
        type: ["Lunch", "Diner"],
    },
    {
        title: "Tennessee Meatloaf",
        serving: 3,
        picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1092268.jpg&w=708&h=708&c=sc&poi=face&q=85",
        level: "Medium",
        duration: 120,
        ingredients: [
            {
                quantity: 1,
                unit: "others",
                value: "cooking spray",
            },
            {
                quantity: 1,
                unit: "others",
                value: "onion",
            },
            {
                quantity: 0.5,
                unit: "others",
                value: "green bell pepper",
            },
            {
                quantity: 2,
                unit: "others",
                value: "garlic",
            },
            {
                quantity: 2,
                unit: "others",
                value: "eggs",
            },
            {
                quantity: 1,
                unit: "others",
                value: "dried thyme",
            },
            {
                quantity: 1,
                unit: "others",
                value: "seasoned salt",
            },
            {
                quantity: 0.5,
                unit: "others",
                value: "ground black pepper",
            },
            {
                quantity: 2,
                unit: "others",
                value: "prepared mustard",
            },
            {
                quantity: 2,
                unit: "others",
                value: "Worcestershire sauce",
            },
            {
                quantity: 0.5,
                unit: "others",
                value: "hot pepper sauce",
            },
            {
                quantity: 0.5,
                unit: "cups",
                value: "cup milk",
            },
            {
                quantity: 0.66,
                unit: "cups",
                value: "quick cooking oats",
            },
            {
                quantity: 450,
                unit: "grams",
                value: "ground beef",
            },
            {
                quantity: 225,
                unit: "grams",
                value: "ground pork",
            },
            {
                quantity: 225,
                unit: "grams",
                value: "ground veal",
            }],
        instructions: ["Step 1: Combine ketchup, brown sugar, and cider vinegar in a bowl; mix well.", "Step 2: Preheat oven to 350 degrees F (175 degrees C). Spray two 9x5-inch loaf pans with cooking spray or line with aluminum foil for easier cleanup (see Cook's Note).", "Step 3: Place onion and green pepper in covered microwave container and cook until softened, 1 to 2 minutes. Set aside to cool.", "Step 4: In large mixing bowl, combine garlic, eggs, thyme, seasoned salt, black pepper, mustard, Worcestershire sauce, hot sauce, milk, and oats. Mix well. Stir in cooked onion and green pepper. Add ground beef, pork, and veal. With gloved hands, work all ingredients together until completely mixed and uniform.", "Step 5: Divide meatloaf mixture in half and pat half of mixture into each prepared loaf pan. Brush loaves with half of the glaze; set remainder of glaze aside.", "Step 6: Bake in preheated oven for 50 minutes. Remove pans from oven; carefully drain fat. Brush loaves with remaining glaze. Return to oven and bake for 10 minutes more. Remove pans from oven and allow meatloaf to stand for 15 minutes before slicing."],
        creator: "Meesh",
        type: ["Lunch", "Diner"],
    },
    {
        title: "Low-Carb 'Tacos'",
        serving: 4,
        picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3884031.jpg&w=596&h=596&c=sc&poi=face&q=85",
        level: "Easy",
        duration: 35,
        ingredients: [
            {
                quantity: 675,
                unit: "grams",
                value: "ground beef",
            },
            {
                quantity: 1,
                unit: "others",
                value: "onion",
            },
            {
                quantity: 100,
                unit: "grams",
                value: "jalapeno peppers",
            },
            {
                quantity: 25,
                unit: "grams",
                value: "taco seasoning mix",
            },
            {
                quantity: 2,
                unit: "cups",
                value: "lettuce",
            },
            {
                quantity: 1,
                unit: "others",
                value: "tomato",
            },
            {
                quantity: 0.5,
                unit: "cups",
                value: "reduced-fat Cheddar cheese",
            },
            {
                quantity: 0.25,
                unit: "cups",
                value: "salsa",
            },
            {
                quantity: 0.25,
                unit: "cups",
                value: "low-fat sour cream",
            },
            {
                quantity: 1,
                unit: "others",
                value: "avocado",
            }],
        instructions: ["Step 1: Cook and stir ground beef, onion, and jalapeno peppers together in a skillet over medium-high heat until meat is browned and crumbly, 7 to 10 minutes. Stir taco seasoning into meat mixture; bring to a simmer and cook until flavors combine, about 5 minutes.", "Step 2: Stir meat mixture, shredded lettuce, tomato, Cheddar cheese, salsa, and sour cream together in a large bowl. Divide taco mixture among 4 bowls and top each with avocado slices."],
        creator: "Meesh",
        type: ["Lunch", "Diner"],
    },
    {
        title: "Frozen Vegetable Stir-Fry",
        serving: 4,
        picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1120409.jpg&w=708&h=474&c=sc&poi=face&q=85",
        level: "Easy",
        duration: 10,
        ingredients: [
            {
                quantity: 2,
                unit: "others",
                value: "soy sauce",
            },
            {
                quantity: 1,
                unit: "others",
                value: "brown sugar",
            },
            {
                quantity: 2,
                unit: "others",
                value: "garlic powder",
            },
            {
                quantity: 2,
                unit: "others",
                value: "peanut butter",
            },
            {
                quantity: 2,
                unit: "others",
                value: "olive oil",
            },
            {
                quantity: 400,
                unit: "grams",
                value: "frozen mixed vegetables",
            }],
        instructions: ["Step 1: Combine soy sauce, brown sugar, garlic powder, and peanut butter in a small bowl.", "Step 2: Heat oil in a large skillet over medium heat; cook and stir frozen vegetables until just tender, 5 to 7 minutes. Remove from heat and fold in soy sauce mixture."],
        creator: "Meesh",
        type: ["Lunch", "Diner"],
    },
    {
        title: "Greek Salad",
        serving: 4,
        picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5344921.jpg&w=708&h=474&c=sc&poi=face&q=85",
        level: "Easy",
        duration: 20,
        ingredients: [
            {
                quantity: 1,
                unit: "others",
                value: "head romaine lettuce",
            },
            {
                quantity: 1,
                unit: "others",
                value: "red onion",
            },
            {
                quantity: 150,
                unit: "grams",
                value: "black olives",
            },
            {
                quantity: 1,
                unit: "others",
                value: "green bell pepper",
            },
            {
                quantity: 1,
                unit: "others",
                value: "red bell pepper",
            },
            {
                quantity: 2,
                unit: "others",
                value: "tomatoes",
            },
            {
                quantity: 1,
                unit: "others",
                value: "cucumber",
            },
            {
                quantity: 1,
                unit: "cups",
                value: "crumbled feta cheese",
            },
            {
                quantity: 6,
                unit: "others",
                value: "olive oil",
            },
            {
                quantity: 1,
                unit: "others",
                value: "dried oregano",
            },
            {
                quantity: 1,
                unit: "others",
                value: " lemon juice",
            },
            {
                quantity: 1,
                unit: "others",
                value: "ground black pepper",
            }],
        instructions: ["Step 1: In a large salad bowl, combine the Romaine, onion, olives, bell peppers, tomatoes, cucumber and cheese.", "Step 2: Whisk together the olive oil, oregano, lemon juice and black pepper. Pour dressing over salad, toss and serve."],
        creator: "Meesh",
        type: ["Lunch", "Diner"],
    },
    {
        title: "Pistachio Twists ",
        serving: 4,
        picture:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F642009.jpg&w=596&h=399&c=sc&poi=face&q=85",
        level: "Easy",
        duration: 25,
        ingredients: [
          {
            quantity: 440,
            unit: "grams",
            value: " frozen puff pastry,thawed (one package)",
          },
          {
            quantity: 1,
            unit: "others",
            value: "egg white,beaten",
          },
          {
            quantity: 0.3,
            unit: "cups",
            value: "finely chopped shelled pistachios",
          },
          {
            quantity: 1,
            unit: "others",
            value: "kosher salt to taste",
          },
        ],
        instructions: [
          "Step 1 :Preheat oven to 350 degrees F (175 degrees C). Line baking sheets with parchment paper.",
          "Step 2 :Unfold the sheets of puff pastry, and brush tops with egg white. Sprinkle pistachios and salt over the egg white wash; flip the sheets, brush with egg white, and sprinkle with pistachios and salt. With a sharp knife, cut pastry into 3-inch long strips, about 3/4 inch wide. Twist the strips twice, then arrange on the prepared baking sheets so they don't touch.",
          "Step 3: Bake in the preheated oven until browned, about 15 minutes.",
        ],
        creator: "By slmcm",
        type: ["Snack"],
      },
      {
        title: "Strawberry Goat Cheese Bruschetta ",
        serving: 12,
        picture:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1022906.jpg&w=595&h=595&c=sc&poi=face&q=85",
        level: "Easy",
        duration: 25,
        ingredients: [
          {
            quantity: 0.5,
            unit: "cups",
            value: " balsamic vinegar",
          },
          {
            quantity: 12,
            unit: "others",
            value: "slices Italian bread",
          },
          {
            quantity: 1,
            unit: "others",
            value: "tablespoon olive oil",
          },
          {
            quantity: 450,
            unit: "grams",
            value: "pound strawberries, washed and diced",
          },
          {
            quantity: 2,
            unit: "others",
            value: "fresh thyme leaves, plus more for serving",
          },
          {
            quantity: 1,
            unit: "cups",
            value: "goat cheese, room temperature",
          },
          {
            quantity: 1,
            unit: "others",
            value: "salt and freshly ground pepper to taste",
          },
        ],
        instructions: [
          "Step 1 :Heat vinegar in a small skillet over medium-low heat. Simmer until reduced by about half, 8 to 10 minutes. Remove from heat and allow to cool to room temperature.",
          "Step 2 :Prepare a grill for high heat. Place bread slices on a foil-lined baking sheet and drizzle with olive oil.",
          "Step 3 :Combine strawberries and thyme in a small bowl and set aside.",
          "Step 4 :Grill bread on the preheated grill until browned, about 3 minutes per side.",
          "Step 5: Spread goat cheese on toasted bread. Add black pepper, salt, and reduced vinegar to the strawberry mixture. Spoon over the goat cheese topped bruschetta. Garnish with additional thyme.",
        ],
        creator: "By Chef John",
        type: ["Snack"],
      },
      {
        title: "Healthier Honey-Sesame Chicken",
        serving: 4,
        picture:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6906573.jpg&w=596&h=596&c=sc&poi=face&q=85",
        level: "Medium",
        duration: 120,
        ingredients: [
          {
            quantity: 0.3,
            unit: "cups",
            value: "honey",
          },
          {
            quantity: 0.25,
            unit: "cups",
            value: "ketchup",
          },
          {
            quantity: 0.25,
            unit: "cups",
            value: "olive oil",
          },
          {
            quantity: 40,
            unit: "grams",
            value: "sesame seeds",
          },
          {
            quantity: 2,
            unit: "others",
            value: "tablespoon low-sodium soy sauce",
          },
          {
            quantity: 1,
            unit: "others",
            value: "freshly squeezed lemon juice",
          },
          {
            quantity: 2,
            unit: "others",
            value: "Sriracha sauce",
          },
          {
            quantity: 1,
            unit: "others",
            value: "salt",
          },
          {
            quantity: 1,
            unit: "others",
            value: "ground black peper",
          },
          {
            quantity: 1,
            unit: "others",
            value: "garlic powder",
          },
          {
            quantity: 1,
            unit: "others",
            value: "ground ginger",
          },
          {
            quantity: 450,
            unit: "grams",
            value: "chicken breast, cut into 1-inch cubes",
          },
        ],
        instructions: [
          "Step 1 :Mix honey, ketchup, olive oil, sesame seeds, soy sauce, lemon juice, Sriracha sauce, salt, pepper, garlic powder, and ginger in a bowl until well combined. Add chicken pieces and toss to coat. Cover and refrigerate for 2 to 6 hours.",
          "Step 2 :Preheat the oven to 350 degrees F (175 degrees C).",
          "Step 3 :Transfer chicken and sauce into an oven-proof dish.",
          "Step 4 :Bake in the preheated oven for 8 minutes. Remove from oven and turn chicken pieces over. Bake until chicken is no longer pink in the center and the juices run clear, 5 to 8 more minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
        ],
        creator: "By Yoly",
        type: ["Lunch", "Diner"],
      },
      {
        title: "Vanila Crepes",
        serving: 12,
        picture:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F406823.jpg&w=595&h=398&c=sc&poi=face&q=85",
        level: "Medium",
        duration: 30,
        ingredients: [
          {
            quantity: 1.5,
            unit: "cups",
            value: "milk",
          },
          {
            quantity: 3,
            unit: "others",
            value: "egg yolks",
          },
          {
            quantity: 2,
            unit: "others",
            value: "tablespoons vanilla extract",
          },
          {
            quantity: 1.5,
            unit: "cups",
            value: "all-purpose flour",
          },
          {
            quantity: 30,
            unit: "grams",
            value: "sugar",
          },
          {
            quantity: 1,
            unit: "others",
            value: "salt",
          },
          {
            quantity: 50,
            unit: "grams",
            value: "melted butter",
          },
        ],
        instructions: [
          "Step 1 :In a large bowl, mix together the milk, egg yolks and vanilla. Stir in the flour, sugar, salt and melted butter until well blended.",
          "Step 2 :Heat a crepe pan over medium heat until hot. Coat with vegetable oil or cooking spray. Pour about 1/4 cup of batter into the pan and tip to spread the batter to the edges. When bubbles form on the top and the edges are dry, flip over and cook until lightly browned on the other side and edges are golden. Repeat with remaining batter.",
          "Step 3 :Fill crepes with your favorite fruit, cream, caramel or even ice cream or cheese to serve.",
        ],
        creator: "lelainem10",
        type: ["Breakfast", "Snack"],
      },
      {
        title: "Vanila Crepes",
        serving: 3,
        picture:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F271223.jpg&w=596&h=596&c=sc&poi=face&q=85",
        level: "Medium",
        duration: 20,
        ingredients: [
          {
            quantity: 6,
            unit: "others",
            value: "thick slices bread",
          },
          {
            quantity: 2,
            unit: "others",
            value: "eggs",
          },
          {
            quantity: 0.6,
            unit: "cups",
            value: "milk",
          },
          {
            quantity: 1,
            unit: "others",
            value: "teaspoon ground cinnamon (Optional)",
          },
          {
            quantity: 1,
            unit: "others",
            value: "teaspoon ground nutmeg (Optional)",
          },
          {
            quantity: 1,
            unit: "others",
            value: "salt",
          },
          {
            quantity: 1,
            unit: "others",
            value: "teaspoon vanilla extract (Optional)",
          },
        ],
        instructions: [
          " Step 1 : Beat together egg, milk, salt, desired spices and vanilla.",
          "Step 2 :Heat a lightly oiled griddle or skillet over medium-high heat.",
          "Step 3 :Dunk each slice of bread in egg mixture, soaking both sides. Place in pan, and cook on both sides until golden. Serve hot.",
        ],
        creator: "By Jan Bittner",
        type: ["Breakfast", "Snack"],
      },
]


Recipe.deleteMany()
    .then(Recipe.insertMany(recipes))
    .then(dbSuccess => {
        console.log(dbSuccess);
    })
    .catch(dbError => {
        console.log(dbError);
    });