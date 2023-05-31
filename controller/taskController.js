function getAllTasks(req,res){
    res.send("COntroller working")
}
function createTasks(req,res){
    res.json(req.body)
}
function getTask(req,res){
    res.json({id:req.params.id})
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