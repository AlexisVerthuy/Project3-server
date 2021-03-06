const express = require("express");
const Recipe = require("../models/Recipe");
const router = express.Router();
const uploader = require("../config/cloudinary");

// get list of all recipes
router.get("/", (req, res, next) => {
  Recipe.find()
    .then((recipes) => {
      console.log("ici,", recipes);
      res.json(recipes);
      //console.log(recipes);
    })
    .catch((err) => next(err));
});

//get list one recipe by id
router.get("/:id", (req, res, next) => {
  //console.log("this is my response", req.params.id);
  Recipe.findById(req.params.id)

    .then((oneRecipe) => {
      //console.log("my req.param", req.params.id);

      res.status(200).json(oneRecipe);
      //console.log("this is my response", oneRecipe);
    })

    .catch((dbError) => {
      console.log(dbError)
      res.status(500).json(dbError);
    });
});

//create a new recipe

router.post("/create", uploader.single("picture"), (req, res, next) => {
  let {
    title,
    serving,
    level,
    duration,
    ingredients,
    instructions,
    creator,
    type,
  } = req.body;

  console.log("show me this", req.body);
  // let picture = req.file.path;
  // console.log("show me this path", req.file.path);
  const newRecipe = {
    // picture,
    title,
    serving,
    level,
    duration,
    ingredients,
    instructions,
    creator,
    type,
  };

  Recipe.create(newRecipe)
    .then((createdRecipe) => {
      res.status(201).json(createdRecipe);
    })

    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.patch(
  "/edit/:id",
  uploader.single("picture"),
  async (req, res, next) => {
    const {
      title,
      serving,
      level,
      duration,
      quantity,
      unit,
      value,
      instructions,
      creator,
      type,
    } = req.body;
    const recipeToUpdate = req.body;
    if (req.file) {
      recipeToUpdate.picture = req.file.path;
    } else {
      delete recipeToUpdate.picture;
    }
    try {
      await Recipe.findByIdAndUpdate(req.params.id, recipeToUpdate);
      res.status(201).json(recipeToUpdate);
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/delete/:id", async (req, res, next) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);

    res.send("ok");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
