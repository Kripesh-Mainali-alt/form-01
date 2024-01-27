const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    number : {
        type : Number,
        required : true,
        unique : true
    },
    queries : {
        type : String,
        required : true
    }
})


// creating collections in db
const User = new mongoose.model("User" , userSchema);

module.exports = User;