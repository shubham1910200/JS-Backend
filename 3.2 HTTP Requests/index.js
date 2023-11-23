import express from 'express';

const app = express();
const port = 4000;
app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>");
})


app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})