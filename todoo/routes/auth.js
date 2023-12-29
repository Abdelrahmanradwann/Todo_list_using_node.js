const mongoose = require("mongoose");
const user = require("../model/user");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const verifyToken = require("../Middleware/verifyToken");

//login
router.post("/login",verifyToken,userController.login);


//sign up
router.post("/signUp",userController.signUp)


//get all users
router.get("/users",userController.users);

router.get("/showUsers",userController.showUser);

module.exports = router;