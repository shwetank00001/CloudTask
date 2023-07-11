const express = require("express")
const route = express.Router()
const {    
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask,
    test
} = require('../controller/taskController')

route.get('/', getAllTasks).post('/', createTasks)
route.get('/:id', getTask).patch('/:id', updateTask).delete('/:id', deleteTask)

module.exports = route