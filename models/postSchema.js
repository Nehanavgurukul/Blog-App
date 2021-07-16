const mongoose = require("mongoose");
const db = require("../database/dbConnection");


var post_schema=({
    user_id:{type:String,require:true},
    name:{type:String,require:true},
    email:{type:String,require:true},
    subject:{type:String,require:true},
    message:{type:String,require:true},
    date:{type:String,require:true}
})

var post_data=new mongoose.model('post_data', post_schema,'post_blog')

module.exports=post_data