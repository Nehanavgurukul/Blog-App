const mongoose = require("mongoose");
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL,{
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

