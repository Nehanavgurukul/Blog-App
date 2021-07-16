const MyBlogApp = require("../models/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
app.use(express.json());


const signup = (req, res) => {
    var email = req.body.email
    var password = req.body.password
    bcrypt.hash(password, 10, function (err, passwordHash) {
        if (err) {
            res.send("Please Try Again..")
        } else {
            MyBlogApp.findOne({ email: req.body.email })
                .then((user) => {
                    if (user != null) {
                        res.send(`${req.body.email} , this email already existe, choose another Email.`)
                        console.log(`${req.body.email} , this email already existe, choose another Email.`)
                    }
                })
                .then(() => {
                    var userSave = new MyBlogApp({
                        username: req.body.username,
                        email: req.body.email,
                        password: passwordHash
                    })
                    userSave.save()
                    res.json({ status: "Registration Successful...." });
                    console.log("Registration Successful....")
                })
                .catch((err) => {
                    res.send(err)
                    console.log(err)
                })
        }
    })
}



const login = (req, res) => {
    let email = req.body.email
    MyBlogApp.findOne({ email: email })
        .then((user) => {
            if(user != null){
                bcrypt.compare(req.body.password, user.password, function (err, result) {
                    if (err) {
                        res.send("user Failed")
                        console.log("user Falied")

                    } else if (result === false) {
                        res.send("Your password wrong..")
                        console.log("Your password wrong..")
                    } else if (result) {
                        res.setHeader('Content-Type', 'text/plain');
                        res.status(200)
                        res.json({ message: "Your login successfully.." })
                        console.log("Your login successfully..")
                    }
                })
            }else{
                res.send("Invalid email..")
                console.log("Invalid email..")
            }
        })
        .catch((err) => {
            res.send(err)
            console.log(err)
        })
}




module.exports = { signup, login}