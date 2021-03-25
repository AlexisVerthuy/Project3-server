const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String },
  LastName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  recipes: {
    type: Schema.Types.ObjectId,
    ref: "recipe"
  },
  shoppingList: {
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  },

  weekMeal: {
    monday: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
    tuesday: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
    wednesday: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
    Thursday: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
    friday: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
    saturday: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
    sunday: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
