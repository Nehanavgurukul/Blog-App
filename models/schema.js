const mongoose = require("mongoose");
const dbConnection = require("../database/dbConnection");


//create schema ..
const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        lowercase : true
    },
    email : {
        type : String,
        required :true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})


//create modul ..

const myBlogApp = new mongoose.model("blog_apps",UserSchema);

module.exports = myBlogApp;
