import mongoose from "mongoose";

const ToDoScheema = new mongoose.Schema({
    description: {
        type: String,
        max: 250
    },
    complete:{
        type: Boolean
    },
    owner: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    default: Date.now()
})

module.exports = mongoose.model('Todo', ToDoScheema)