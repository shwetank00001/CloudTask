const Task = require('../models/task') 


async function getAllTasks(req,res){
    try {
        const allTasks = await Task.find({})  // we use find({}) to get all document 
        res.send({allTasks})
    } catch (error) {
        res.send({msg:error})
    }
}


async function createTasks(req,res){
    try
    {   
        const task = await Task.create(req.body)  // this will create task in mongoose db using async await
        res.send(task).status(201)
    }
    catch(error)
    {
        res.send({msg:error})
    }
}


async function getTask(req,res,next){
    try {
        const {id:taskID} = req.params
        const getItem = await Task.findOne({_id:taskID})
        if(!getItem){
            res.status(400).json({msg: `No item exist with this id : ${taskID}`})
        }

        res.status(200).json(getItem)  
      
    } catch (error) {
        res.send({msg:"ITEM NOT FOUND"})
    }

}


// will update this later
async function updateTask(req,res){
    
    try {
        const {id:taskID} = req.params
        const updated = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new:true,
            runValidators:true
        })

        if(!updated){
            return res.status(400).json({msg:`no task with id ${taskID}`})
        }

        res.send({"updated value" :updated})
    } catch (error) {
        res.send("item not present")
    }

}


async function deleteTask(req,res){
    try {
        const {id:taskID}  =req.params
        const deleteItem = await Task.findOneAndDelete({_id:taskID})
        if(!deleteItem){
            return res.status(400).json({msg:`no task with id ${taskID}`})
        }
        res.send({"value deleted" : deleteItem})
    } catch (error) {
        res.send("item not present")
    }
}



module.exports= {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask,

}