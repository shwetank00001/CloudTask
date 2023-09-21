const Task = require('../models/task') 
const wrapAsync = require('../middleware/wrapAsync')

const getAllTasks = async (req, res, next) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  }
  

async function createTasks(req,res , next){
    try
    {   
        const task = await Task.create(req.body)  // this will create task in mongoose db using async await
        res.send(task).status(201)
    }
    catch(error)
    {
        return next(new Error("The error is :-" + "\n" + error ))
        // console.log(error)
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
const updateTask = async (req, res, next) => {
    const { id: taskID } = req.params
  
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
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