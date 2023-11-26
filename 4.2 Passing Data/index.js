

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:true}))

app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.post('/submit',(req, res) => {
  const numberOfLetters = req.body['fName'].length + req.body['lName'].length;
  console.log(numberOfLetters);
  res.render('index.ejs',
  {
    numberOfLetters:numberOfLetters,
    fName:req.body['fName'],
    lName:req.body['lName']
  })
})
app.listen(port,()=>{
  console.log(`Starting server on port ${port}`);
})