const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
    description: {
        type:String,
        required: true
    },
    done:{
        type:Boolean,
        default:false
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("ToDo",ToDoSchema)