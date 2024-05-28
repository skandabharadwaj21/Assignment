const express = require('express')
const mongoose = require('mongoose')
const stories = require('./storyModels/stories')
const app = express()

app.use(express.json());

app.post("/story", async function (req, res) {
    try {
      const story = await stories.create(req.body);
      res.status(200).json(story);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/story", async function (req, res) {
    try {
      const story = await stories.find({});
      res.status(200).json(story);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  // GET data by perticular ID
  app.get("/story", async function(req, res){
    try{
      const {id} = req.query
      if(!id){
        return res.status(500).json({message:"story id is required"});
      }
      const story = await stories.findById(id)
      if(!story){
        return res.status(404).json({message:"Story with this id not found"})
      }
      res.status(200).json(story)
    }
    catch(error){
      console.log(error.message);
      res.status(500).json({message:error.message});
    }
  });

  // Update data by perticular ID
  app.put("/story", async function (req, res) {
    try {
      const { id } = req.query;
      if(!id){
        return res.status(500).json({message:"story id is required"})
      }
      const story = await stories.findByIdAndUpdate(id, req.body);
      if (!story) {
        return res.status(404).json({ message: "cannot find product by id" });
      } else {
        res.status(200).json(story);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  // Delete data by perticular ID
  app.delete("/story", async function (req, res) {
    try {
      const { id } = req.query;
      const story = await stories.findByIdAndDelete(id);
        if (!story) {
        return res.status(404).json({ message: "cannot find product by id" });
      } else {
        res.status(200).json(story);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  mongoose
  .connect("mongodb://localhost:27017/backendTask")
  .then(function () {
    app.listen(3000, function () {
      console.log("Node Api running sucessfully ");
    });
    console.log("mongoose connected");
  })
  .catch(function (err) {
    console.log(err);
  });