const Router = require("express").Router();
const { Mongoose } = require("mongoose");
const { Workout } = require("../../models");

// Get Last 7 Workouts
Router.get("/", async (req, res) => {
    console.log("Starting New Workout");
    res.status(302).redirect("exercise.html");
});

module.exports = Router;
