// Libraries
const Path = require("path");
const Express = require("express");
const Mongoose = require("mongoose");

// Local Project Attributes
const PORT = process.env.PORT || 3000;
const Routes = require("./controllers");

// Configure Express App
const App = Express();
App.use(Express.urlencoded({extended: true }));
App.use(Express.json());
App.use(Express.static(Path.join(__dirname, "public")));
App.use(Routes);

// Connection to DB
Mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

// Start App
App.listen(PORT, () => {
    console.log(`Workout App is running on port:${PORT}`);
});