const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const multer = require('multer');

app.set('view engine', 'ejs');

const DB_URL = process.env.DB_URI || 'mongodb://127.0.0.1:27017/auth_test';
const initializeCounter = require('./models/initializecounter');

// Run the initialization function
initializeCounter();
mongoose.connect(DB_URL);
let db = mongoose.connection;

if(db){
    console.log("we good");
} else {
    console.log("Error");
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("", require('./route'));

app.use('/static', express.static('static'));

app.listen(8000, ()=>{
    console.log(`server listening at port 8000`);
})