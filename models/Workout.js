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
        }],
        totalDuration: Number
    }
);
WorkoutSchema.methods.setTotalDuration = function() {
    this.totalDuration = 0;
    for(const exercise of this.exercises){
        this.totalDuration += exercise.duration;
    }
    return this.totalDuration;
};

const Workout = Mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;