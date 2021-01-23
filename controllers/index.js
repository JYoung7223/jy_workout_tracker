const Router = require("express").Router();

const ApiRoutes = require("./api");
// const BrowserRoutes = require("./browser");

// Router.use("/", BrowserRoutes);
Router.use("/api", ApiRoutes);


module.exports = Router;