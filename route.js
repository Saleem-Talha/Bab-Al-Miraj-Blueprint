const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const multer = require('multer');
const router = express.Router();
const Login = require('../Authentication project/models/login');
const Employee = require('../Authentication project/models/employee');

router.get('/', async (req, res) => {
    try {
        res.render('index', { title: 'Login page' });
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup', { title: 'Sign up page' });
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});

router.get('/add-info', async (req, res) => {
    try {
        res.render('add-info', { title: 'Info adding page' });
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});

// Route for handling login
router.post('/login', async (req, res) => {
    try {

        const { username, password } = req.body;

        const user = await Login.findOne({ username, password });

        if (user) {

            res.redirect('/add-info');
        } else {
            res.json({ message: 'Invalid login credentials', type: 'danger' });
        }
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});


router.post('/signup', async (req, res) => {
    try {
        let newuser = new Login({
            uname : req.body.uname,
            password : req.body.password,
        });
        await newuser.save();
        res.render('add-info', { title: 'Add User info'});
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});

router.post('/add-info', async (req, res)=>{
    try{
        let newemployee = new Employee({
            ename : req.body.ename,
            phoneNumber : req.body.phoneNumber,
            dateOfJoining: req.body.dateOfJoining,
            dateOfTermination: req.body.dateOfTermination,
            designation: req.body.designation,
            salary: req.body.salary,
        });
       await newemployee.save();
       res.render('add-info', {title : 'Add User info'});
    }  catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router;