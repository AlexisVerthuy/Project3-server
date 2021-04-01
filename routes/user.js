const express = require("express");
const router = express.Router();
const User = require("../models/User");
const uploader = require("../config/cloudinary");

//gets the profile page of the user

router.get("/profile", function (req, res, next) {
  // console.log(" my req. session in profile", req.session);
  const currentUser = req.session.currentUser;
  //console.log("my current user", currentUser);
  User.findOne({ _id: currentUser })
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

router.patch("/edit", uploader.single("avatar"), async (req, res, next) => {
  const { firstName, LastName, email} = req.body;
  const userToUpdate = req.body;
  console.log("req", req.session.currentUser)
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
    // res.redirect("/profile");
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
    res.send("delete");
    // res.redirect("/");
  } catch (dbError) {
    //console.log("this is my error", dbEerr);
    next(dbError);
  }
});

// router.delete("/toto", function (req, res, next ) {
//   res.send("toto");

// })


module.exports = router;
