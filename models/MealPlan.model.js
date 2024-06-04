const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const mealPlanSchema = new Schema({
  numberOfPeople: {
    type: Number,
    enum: [1, 2, 3, 4],
    required: true,
    default: 2,
  },
  dishesPerWeek: {
    type: Number,
    enum: [2, 3, 4, 5],
    required: true,
    default: 4,
  },
  price: {
    type: Number,
    required: true,
  },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },

  dishes: [{ type: Schema.Types.ObjectId, ref: "Dish", required: true }],
});



const MealPlan = model("MealPlan", mealPlanSchema);
module.exports = MealPlan;
