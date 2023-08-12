const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        require: [true, "You need to name the task"],
        minLength: 1,
        maxLength: 100
    }
})

module.exports = mongoose.model("Task", TaskSchema)