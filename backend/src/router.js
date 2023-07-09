const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const pastriesControllers = require("./controllers/pastriesControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/pastries", pastriesControllers.browse);
router.get("/pastries/:id", pastriesControllers.read);
router.post("/pastries", pastriesControllers.add);
router.put("/pastries/:id", pastriesControllers.edit);
router.delete("/pastries/:id", pastriesControllers.destroy);

module.exports = router;
