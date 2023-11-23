import express from 'express';
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>')
})

app.post('/register',(req,res)=>{
    res.sendStatus(201)
})
app.put('/user/shubham',(req,res)=>{
    res.sendStatus(200)
})
app.patch('user/shubham',(req,res)=>{
    res.sendStatus(200)
})
app.delete('/user/shubham',(req,res)=>{
    res.sendStatus(200)
})
app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})