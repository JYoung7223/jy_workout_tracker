const Router = require("express").Router();
const workoutsRoutes = require("./workoutsRoutes");

Router.use('/workouts', workoutsRoutes);

module.exports = Router;
