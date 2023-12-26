const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
    description: {
        type:String,
        required: true
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("ToDo",ToDoSchema)