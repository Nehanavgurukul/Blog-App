const routes = require("./routes/user");
const express = require("express");
const app = express();
app.use(express.json())
require("dotenv").config()
const MY_PORT = process.env.PORT

app.use(routes)
app.listen(MY_PORT,() => {
    console.log(`server is running on port no ${MY_PORT}`)
})