const express = require('express')
const app = express()
const tasks = require('./routes/taskRoute')
const test = require('./routes/testRoute')

require('./db/connect')



app.use(express.json());
app.use(express.urlencoded());

// app.use(express.static,('./public'))'

app.get('/', function(req,res){
    res.send("Hi")
})

app.use('/api/v1/tasks', tasks)
app.use('/testing', test)

app.listen(5000, ()=>{
    console.log("APP ON PORT 000")
})