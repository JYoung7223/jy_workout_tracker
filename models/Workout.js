const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Exercise = require("./Exercise.js");

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{
            type: Schema.ObjectId,
            ref: "Exercise"
        }]
    }
);

const Workout = Mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;