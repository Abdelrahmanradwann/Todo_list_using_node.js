const express = require("express")
const router = express.Router();
const controllers = require("../controllers/ToDo_controllers")
const verifyToken = require("../Middleware/verifyToken");


//show list
router.get("/ToDo",verifyToken,controllers.showList);

// delete all items
router.delete("/delete",verifyToken,controllers.deleteMany)


// delete one item
router.delete("/delete/:id",verifyToken,controllers.deleteOne)

// add to list
router.post("/add",verifyToken,controllers.add)

//update list
router.put("/update/:id",verifyToken,controllers.update)

//search
router.get("/search",verifyToken,controllers.search)

//mark as done
router.put("/done/:id",verifyToken,controllers.done)


module.exports = router
