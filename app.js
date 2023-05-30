const express = require('express')
const app = express()
const task = require('./routes/taskRoute')

app.get('/', function(req,res){
    res.send("HI")
})

app.use('/api/v1/tasks', task)


app.listen(5000 ,() => {
    console.log("APP ON PORT 5000")
})