const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const userDet = require('./userModel')
const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname, '../')));

app.get('/', async function(req, res){
    res.sendFile(path.join(__dirname, '../signup.html'));
});

app.post('/userCreation', async function(req, res) {
    try{
        const {email} = req.body;
        let userExists = await userDet.findOne({email})
        if(userExists){
            return res.status(400).json({ msg: 'User already exists' });
        }
        const userCreate = await userDet.create(req.body);
       
        res.status(200).json(userCreate)
    }catch(error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

app.get('/userFinding', async function(req, res) {
    try{
    const {id} = req.query;
    if(!id){
        return res.status(500).json({message:"Id is required to find user"})
    }
    const userFind = await userDet.findById(id)
    if(!userFind){
        return res.status(500).json({message:"User does not exist"})
    }
    res.status(200).json(userFind)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
      }
});

app.delete('/deleteUser', async function(req, res) {
    const {id} = req.query;
    try{
    if(!id){
        return res.status(500).json({message:"Enter user ID"})
    }
    const userDelete = await userDet.findByIdAndDelete(id);
    if (!userDelete) {
        return res.status(404).json({ message: "cannot find user by this id" });
      } else {
        res.status(200).json(userDelete);
      }
    }
     catch(error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
});


//Login
app.post('/login', async function(req, res) {
    try {
        const email = req.body?.email;
        const password = req.body?.password;

        if (!email || !password) {
            return res.status(400).json({ msg: 'Email and password are required' });
        }

        // Check if the user exists
        const user = await userDet.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Password matches, return success
        res.status(200).json({ msg: 'Login successful' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});



mongoose.connect("mongodb://localhost:27017/userDB")
.then(function() {
    app.listen(3000, () => {
        console.log("Node API running successfully");
    });
    console.log("Mongoose Connected");
}) .catch(function(error){
    console.log(error);
});