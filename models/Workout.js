const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const { Exercise, ExerciseSchema } = require("./Exercise.js");

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{
            type: ExerciseSchema,
            default: Exercise
        }]
    }
);

const Workout = Mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;