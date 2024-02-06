const mongoose = require('mongoose');
const userlogin = new mongoose.Schema({
    uname:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Login', userlogin);