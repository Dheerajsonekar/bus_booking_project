const express = require('express');
const app = express();
const database = require('./db');







database.connect((err)=>{
    if(err){
        console.log("error while connecting to database ", err);
    }
    else{
        console.log("Connected to Database.")
        const PORT = 3000;
        app.listen(PORT, ()=>{
            console.log(`server is running on port ${PORT}.`);
        })
    }
})