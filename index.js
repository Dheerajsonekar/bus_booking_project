const express = require('express');
const app = express();
const database = require('./db/connection');
const userRoutes = require('./routes/userRoutes');



app.use(express.json());



database.getConnection((err, connection)=>{
    if(err){
        console.log("error while connecting to database ", err);
    }
    else{
        console.log("Connected to Database.");
        connection.release();

        app.use('/users', userRoutes);
        
        const PORT = 3000;
        app.listen(PORT, ()=>{
            console.log(`server is running on port ${PORT}.`);
        })
    }
})