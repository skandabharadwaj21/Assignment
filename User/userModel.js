const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:[true, "Enter your Email"],
        },
        firstName:{
            type:String,
            required:[true, "Enter Firstname"],
        },
        lastName:{
            type:String,
        },
        password:{
            type:String,
            required:[true, "Enter password"],
        },
},
        {
            timestamps: true,
        }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
// email
// firstname
// lastname
// password