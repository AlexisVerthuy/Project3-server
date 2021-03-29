const express = require("express");
const router = express.Router();
const User = require("../models/User");
const uploader = require("../config/cloudinary");

//gets the profile page of the user

router.get("/profile", function (req, res, next) {
  // console.log(" my req. session in profile", req.session);
  const currentUser = req.session.currentUser;
  //console.log("my current user", currentUser);
  User.find({ _id: currentUser })
    .select("-password")
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
      //res.render("/profile");
    })
    .catch((dbError) => {
      next(dbError);
    });
});
//to edit the user profile
router.get("/edit", function (req, res, next) {
  //console.log("this is my req.session", req.params._id);
  const currentUser = req.session.currentUser;
  User.find({ _id: currentUser })
    .select("-password")
    .then((user) => {
      //console.log("my user", user);
      res.status(200).json(user);
      //   res.render("user/edituser");
    })
    .catch((dbError) => {
      next(dbError);
    });
});

//post edit the user

router.post("/edit", uploader.single("avatar"), async (req, res, next) => {
  const { firstName, lastName, email, avatar } = req.body;
  const userToUpdate = req.body;
  //console.log("my user toupdate", userToUpdate);
  if (req.file) {
    console.log("if");
    userToUpdate.avatar = req.file.path;
  } else {
    console.log("else");
    delete userToUpdate.avatar;
  }
  try {
    const foundUser = await User.findByIdAndUpdate(
      req.session.currentUser,
      userToUpdate,
      { new: true }
    ).select("-password");
    console.log(foundUser);
    req.session.currentUser = foundUser;
    res.status(200).json(foundUser);
    //res.redirect("profile");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/* GET delete profile page : Delete a user profile page and redirect to home page */

router.get("/delete", async function (req, res, next) {
  try {
    await User.findByIdAndDelete(req.session.currentUser);
    req.session.destroy();
    res.sendStatus(204);
    res.redirect("/");
  } catch (dbError) {
    //console.log("this is my error", dbEerr);
    next(dbError);
  }
});

module.exports = router;
