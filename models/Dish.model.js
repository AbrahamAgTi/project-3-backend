const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
    enum: ["easy", "medium", "hard"],
  },
  categories: {
    origin: {
      type: [String],
      required: true,
      enum: [
        "Italian",
        "Mexican",
        "Indian",
        "Turkish",
        "Chinese",
        "Japanese",
        "French",
        "American",
        "MiddleEastern",
        "Thai",
        "Spanish",
        "Greek",
        "Korean",
        "Vietnamese",
      ],
    },
    diet: {
      type: [String],
      required: true,
      enum: [
        "Vegan",
        "Vegetarian",
        "Animal-protein",
        "Pescatarian",
        "Low-calories",
        "High-protein",
        "Keto",
        "Paleo",
        "Gluten-free",
        "Dairy-free",
      ],
    },
    cookingTime: {
      type: String,
      required: true,
      enum: ["Fast", "Normal", "Slow"],
    },
    isHot: {
      type: Boolean,
      required: true,
    },
    allergens: {
      type: [String],
      required: true,
      enum: [
        "Eggs",
        "Dairy",
        "Wheat",
        "Soy",
        "Peanuts",
        "Tree nuts",
        "Fish",
        "Shellfish",
        "Sesame",
        "None",
      ],
    },
  },
  steps: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  nutritionalValuePerServing: {
    calories: {
      type: Number,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    carbohydrates: {
      type: Number,
      required: true,
    },
    fiber: {
      type: Number,
      required: true,
    },
  },
  bigImageURL: {
    type: String,
    default: "https://placehold.co/600x400?text=Hello\nDish",
    required: true,
  },
  smallImageURL: {
    type: String,
    default: "https://placehold.co/100x100",
    required: true,
  },
});

const Dish = model("Dish", dishSchema);

module.exports = Dish;
