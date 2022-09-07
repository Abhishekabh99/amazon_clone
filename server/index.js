console.log('Hello World');


// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require('mongoose');

//IMPORT FROM OTHER FILES
const authRouter = require("./routes/auth");
const User = require("./models/user.js");


//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://abhishek:mongodb1amazonclone@cluster0.tob3wdn.mongodb.net/?retryWrites=true&w=majority"


// middleware 
app.use(express.json());
app.use(authRouter);


// Conncections
mongoose.
    connect(DB)
    .then(() => {
        console.log("Conncection Sucessfull");
    })
    .catch((e) => {
        console.log(e);
    });


//GET, PUT, POST, DELETE, UPDATE --> CRUD
app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});



// I AM AT ACCOUNT SCREEN UI NOW 