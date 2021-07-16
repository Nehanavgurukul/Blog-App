const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Neha:nehamongo@123@cluster0.rnv5z.mongodb.net/Blog-App-DB?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex : true
    })
    .then(() => {
        console.log("db connection successfull.")
    })
    .catch((err) => {
        console.log(err, "db not connected.")
    })

