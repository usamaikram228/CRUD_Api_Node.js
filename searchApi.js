const express = require("express");
require('./config');
const product = require('./products');

const app = express();
app.use(express.json());

app.get('/search/:key',async(req,resp)=>{
    let result = await product.find(
        {
            "$or":[
                {  "name":{$regex:req.params.key}},
                {  "brand":{$regex:req.params.key}}
            ]
        }
    );
    resp.send(result);
})
app.listen(5000);