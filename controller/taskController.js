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
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
          return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({ task })
        
    } catch (error) {
        res.send({messgae:error})
    }


}


// will update this later
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