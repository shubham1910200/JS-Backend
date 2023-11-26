// import express from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     const today = new Date("June 24 2023");
//     const day = today.getDay();

//     let type = "a weekday";
//     let adv = "it's time to work hard";

//     if(day===0 || day===6)
//     {
//         type = "the weekand";
//         adv = "it's time to have some fun";

//     }



//     res.render('index.ejs',{dayType:type,advice:adv})
// })

// app.listen(port,()=>{
//     console.log(`listening on ${port}`);
// })

import express from 'express';

const app = express();
const port  = 3000;
let day = 'Working Day'
let throught = 'Work in Progress'
app.get('/', (req, res)=>{
    let date = new Date();
     day = date.getDay();
    if(day===0)
    {
        day = 'Weekend';
        throught = 'Sleeping😊'
    }
    res.render('index.ejs',{dayType:day,advice:throught})
})
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})