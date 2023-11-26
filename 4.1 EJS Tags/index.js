// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   const data = {
//     title: "EJS Tags",
//     seconds: new Date().getSeconds(),
//     items: ["apple", "banana", "cherry"],
//     htmlContent: "<strong>This is some strong text</strong>",
//   };
//   res.render("index.ejs", data);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  let data = {
    title:'EJS Tags',
    day: new Date().getDay(),
    days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  };
  res.render('index.ejs', data);
})

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})