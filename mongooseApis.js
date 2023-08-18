const express = require("express");
require('./config');
const product = require('./products');

const app = express();
app.use(express.json());

app.post('/',async(req,res)=>{
    //console.log(req.body);
    let data = product(req.body);
    let result = await data.save();
   // console.log(result);
    res.send("Result");
})

app.get('/',async(req,resp)=>{
    let result = await product.find();
    resp.send(result);
})

app.delete('/:_id',async(req,resp)=>{

    let data = await product.deleteOne(req.params);
    resp.send(data);
})

app.put('/:_id',async(req,resp)=>
{
    let data = await product.updateOne(req.params,{$set:req.body});
    resp.send(data);
})
app.listen(5000);