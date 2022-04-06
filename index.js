const question = require('./Questionmodel')
const mongoose = require('mongoose');
const uri = MONGO_URI = `mongodb://uday:udhai123@cluster0-shard-00-00.qlr4q.mongodb.net:27017,cluster0-shard-00-01.qlr4q.mongodb.net:27017,cluster0-shard-00-02.qlr4q.mongodb.net:27017/Quiz?ssl=true&replicaSet=atlas-dr5fvf-shard-0&authSource=admin&retryWrites=true&w=majority`
const connexion = mongoose.connect(uri,(req,res) =>{
    console.log("connected to atle");
})
const express = require("express")
const app = express()
app.use(express.json())

app.get('/',async(req,res) =>{
    const data = await question.find()
    res.json({
        data,
        message : 'create sucessfully'
    })
})
app.post('/',async(req,res) =>{
    const query = req.body
    console.log((query));
    const data = await question.create(query)
    res.json({
        message : 'inserted sucessfully',
        data,
    })
})
app.listen(5000 , () => console.log(`running`))


