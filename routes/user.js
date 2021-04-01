const express = require("express");
const router = express.Router();
const User = require("../models/User");
const uploader = require("../config/cloudinary");

//gets the profile page of the user

router.get("/profile", function (req, res, next) {
  const currentUser = req.session.currentUser;
  User.findOne({ _id: currentUser })
    .select("-password")
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((dbError) => {
      next(dbError);
    });
});
//to edit the user profile
router.get("/edit", function (req, res, next) {
  const currentUser = req.session.currentUser;
  User.find({ _id: currentUser })
    .select("-password")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((dbError) => {
      next(dbError);
    });
});

//post edit the user

router.patch(
  "/edit",
   uploader.single("avatar") , async (req, res, next) => {
    const { firstName, LastName, email } = req.body;
    const userToUpdate = req.body;
    console.log("my user toupdate", userToUpdate);
    if (req.file) {
      console.log("if");
      userToUpdate.avatar = req.file.path;
    } else {
      console.log("else");
      delete userToUpdate.avatar;
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.session.currentUser,
        userToUpdate,
        { new: true }
      ).select("-password");
      console.log(updatedUser);
      req.session.currentUser = updatedUser;
      res.status(200).json(updatedUser);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);
//route get for week plan

router.get("/myweek", function (req, res, next) {
  const currentUser = req.session.currentUser;
  User.findOne({ _id: currentUser })
    .populate({ path: "Recipe", select: "title" })
    .select("-password")
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((dbError) => {
      next(dbError);
    });
});

//route patch for weekplan - pushing the recipe and the day chosen

router.patch("/weekplan", async (req, res, next) => {
  console.log("my req", req.body);
  const day = req.body.day;
  const recipeId = req.body.recipeId;
  console.log("my user", req.session.currentUser);
  const weemMealDay = `weekMeal.${day}`;
  try {
    const updatedWeekPlanUser = await User.findByIdAndUpdate(
      req.session.currentUser,
      { $push: { [weemMealDay]: [recipeId] } },
      { new: true }
    ).select("-password");
    console.log("this is the updated week", updatedWeekPlanUser);
    req.session.currentUser = updatedWeekPlanUser;
    res.status(200).json(updatedWeekPlanUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/* GET delete profile page : Delete a user profile page and redirect to home page */

router.delete("/profile/delete", async function (req, res, next) {
  console.log("req session: ", req.session.cookie)
  try {
    console.log("session current user", req.session.currentUser)

    await User.findByIdAndDelete(req.session.currentUser);

    req.session.destroy();
    res.sendStatus(204);
  } catch (dbError) {
    next(dbError);
  }
});


module.exports = router;
