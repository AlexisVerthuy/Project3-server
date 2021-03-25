const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: { type: String },
    serving: Number,
    picture: { type: String },
    level: { type: String, enum: ["Easy", "Medium", "Difficult"] },
    duration: Number,
    ingredients: [{
        quantity: Number,
        unit: {type: String, enum: ["grams", "liters", "cups", "others"]},
        value: String,
    }],
    instructions: [String],
    creator: { type: String },
    type: { type: [String], enum: ["Breakfast", "Lunch", "Diner", "Snack"] },
});
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;

