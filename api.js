const express = require('express');
const mongodb = require('mongodb');
//const dbConnection = require('./mongodbConnection');
const dbConnect = require('./mongodbConnection');
const app = express();
app.use(express.json());
app.get('/',async (req,resp)=>
{
    const db = await dbConnect();
    let result = await db.find().toArray();
    //console.log(result);
    resp.send(result);
})
app.post('/',async(req,resp)=>{
    const db = await dbConnect();
    let result = await db.insertOne(req.body);
    resp.send(result);
})

app.put('/:name',async (req,resp)=>
{
    const db = await dbConnect();
    let data = req.body;
    let result = db.updateOne(
        {name: req.params.name},{$set:data}
    )
    resp.send(result);

})
app.delete('/:id',async (req,resp)=>
{
    const db = await dbConnect();
    let result = db.deleteOne({_id: new mongodb.ObjectId(req.params.id)} );
    resp.send({result:"deleted"});
})
app.listen(5000);