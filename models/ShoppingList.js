const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingListSchema = new Schema({
    ingredients: [Object],
});

const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);

module.exports = ShoppingList;
