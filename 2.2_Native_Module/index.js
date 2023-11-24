const fs = require("fs");
// fs.writeFile('message.txt','node file created',(err)=>{
//     if(err) throw err;
//     console.log(`The file is a saved`);
// })

fs.readFile('./message.txt',"utf-8",(err, data) => {
    if(err) throw err;
    console.log(`The file is a ${data}`);
})