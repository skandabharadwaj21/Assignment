const mongoose = require ('mongoose')

const storySchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, 'Enter you story title'],
        },
        content:{
            type: String,
            required:[true, 'Enter your content'],
        },
        likes:{
            type: Number,
            default: 0,
        },
        comments:{
            type:String,
            default: "No Comments",
        },
        postedAt:{
            type:Date,
            default: Date.now,
        },
        updatedAt:{
            type:Date,
            default:Date.now,
        },
        createdBy:{
            type:String,
            required: true,
        },
        status:{
            type:String,
            enum:["Published", "draft"],
            default:"draft",
        },
    }
);

const stories = mongoose.model("stories",storySchema)
module.exports = stories;

// title
// content
// likes
// comments
// postedAt
// updatedAt
// createdBy
// status = published or draft