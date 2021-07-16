const MyBlogApp = require("../models/schema");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
app.use(express.json());


const login = (req, res) => {
    let email = req.body.email
    MyBlogApp.findOne({ email: email })
        .then((user) => {
            if (user != null) {
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
            } else {
                res.send("Invalid email..")
                console.log("Invalid email..")
            }
        })
        .catch((err) => {
            res.send(err)
            console.log(err)
        })
}

module.exports = {login}