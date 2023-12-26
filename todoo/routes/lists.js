const express = require("express")
//const {validationResult} = require("express-validator")
//const mongoose = require("mongoose")
const router = express.Router();
const controllers = require("../controllers/ToDo_controllers")

//const list = require("../model/Todo");
//const { json } = require("body-parser");

//show list
router.get("/ToDo",controllers.showList);

// delete all items
router.delete("/delete",controllers.deleteMany)


// delete one item
router.delete("/delete/:id",controllers.deleteOne)

// add to list
router.post("/add",controllers.add)

//update list
router.put("/update/:id",controllers.update)

//search
router.get("/search",controllers.search)

module.exports = router
