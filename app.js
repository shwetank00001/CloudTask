const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

app.get('/', (req,res)=>{
    res.send("ADAD")
})

app.use('/api/v1/tasks',tasks)

app.listen(5000,()=>{
    console.log('SV ON PORT 5000')
})