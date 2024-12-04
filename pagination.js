const express = require('express');
const mongoose = require('mongoose');
const app = express();
const stories = require('./Backend-tasks/storyModels/stories')
const port = 3000;

mongoose.connect('mongodb://localhost:27017/backendTask', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get("/story", async function (req, res) {
    try {
      // Pagination
      const { page = 1, limit = 3 } = req.query;
      const skip = (parseInt(page, 10) - 1) * limit;  
      const result = await stories.find({}).skip(skip).limit(limit);
      res.status(200).json(result);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
