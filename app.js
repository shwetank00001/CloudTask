const express= require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("THIS IS HOME")
})

app.listen(5000, ()=>{
    console.log("APP ON PORT 5000...")
})