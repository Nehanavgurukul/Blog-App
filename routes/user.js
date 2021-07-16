const signupAction = require("../controllers/signup");
const loginAction = require("../controllers/login");
const postAction = require("../controllers/post")


const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();


router.post("/signup", signupAction.signup);
router.get("/login", loginAction.login);
router.post("/post", postAction.post)

module.exports = router;