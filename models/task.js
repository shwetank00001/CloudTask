const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must provide a name "],
        maxlength:[20,'only max 20 chars'],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false  // these all type,required,maxlenght are validatos
    }
})

module.exports = mongoose.model('Task', taskSchema)