const userAction = require("../controllers/user");
const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();


router.post("/signup",userAction.signup);
router.get("/login",userAction.login);

module.exports = router;