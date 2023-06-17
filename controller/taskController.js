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
async function getTask(req,res){
    const {id:taskID} = req.params
    const oneTask = await Task.findOne({_id:taskID})
}


function updateTask(req,res){
    res.send("task updated")
}


function deleteTask(req,res){
    res.send("task deleted")
}



module.exports= {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask

}