const express = require("express")
const route = express.Router()
const {    
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask,
    test} = require('../controller/taskController')

route.get('/', getAllTasks)
route.post('/', createTasks)
route.get('/:item', getTask)
route.patch('/:id', updateTask)
route.delete('/:id', deleteTask)

module.exports = route