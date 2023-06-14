const Task = require('../models/task') 


function getAllTasks(req,res){
    res.send("COntroller working")
}
async function createTasks(req,res){
    try
    {const task = await Task.create(req.body)  // this will create task in mongoose db using async await
    res.send(task).status(201)
    }
    catch(error){
        res.send({msg:error})
    }
}
function getTask(req,res){
    res.json(req.params)
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