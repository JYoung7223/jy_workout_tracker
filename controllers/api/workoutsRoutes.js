const Router = require("express").Router();
const { Mongoose } = require("mongoose");
const { Workout } = require("../../models");

// Get Last 7 Workouts
Router.get("/range", async (req, res) => {
    console.log("Getting Last 7 Workouts");
    Workout.find({}).sort({ day: -1}).limit(7)
        .then((results) => {
            console.log(`Results:${results}`);
            res.status(200).json(results);
        })
        .catch((error)=>{
            console.log(`Error: ${error}`);
            res.status(500).json(error);
        });
});

// Get the Last Workout
// TODO: Combine this with the range request to create a function that takes the # results to return
Router.get("/", async (req, res) => {    
    console.log("Getting Last Workout");
    Workout.find({}).sort({ day: -1}).limit(1)
        .then((results) => {
            console.log(`Results:${results}`);
            res.status(200).json(results);
        })
        .catch((error)=>{
            console.log(`Error: ${error}`);
            res.status(500).json(error);
        });
});

// Create Workout
Router.post("/", async (req, res) => {
    const newWorkout = new Workout(req.body);
    newWorkout.setTotalDuration();
    console.log(`Creating Workout:${JSON.stringify(newWorkout)}`);
    Workout.create(newWorkout)
        .then((results)=>{
            console.log(`Created Workout:${results}`);
            res.status(200).json(results);
        })
        .catch((error)=>{
            console.log(`Error: ${error}`);
            res.status(500).json(error);
        });
});

// Add Exercise
Router.put("/:id", async (req, res) => {
    console.log(`Updating Workout: ${req.params.id}`);
    console.log(`Adding Exercise: ${JSON.stringify(req.body)}`);
    
    Workout.updateOne(
        {_id: req.params.id },
        { $push: 
            {
                exercises: req.body
            },
            $inc:
            {
                totalDuration: req.body.duration
            }
        })
        .then((workResults)=>{
            console.log(`Added Exercise:${req.body}`);
            console.log(`To Workout:${JSON.stringify(workResults)}`);
            res.status(200).json(workResults);
        })
        .catch((workError)=>{
            console.log(`Workout Error: ${workError}`);
            res.status(500).json(workError);
        });    
});

module.exports = Router;
