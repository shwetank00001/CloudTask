function getAllTasks(req,res){
    res.send("contreoller working")
}

function createTask(req,res){
    res.send("create tasks")
}
function getTask(req,res){
    res.send("get Single task")
}
function updateTask(req,res){
    res.send("update tasks")
}
function deleteTask(req,res){
    res.send("delete tasks")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}