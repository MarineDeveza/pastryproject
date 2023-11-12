const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const pastriesControllers = require("./controllers/pastriesControllers");
const categoriesControllers = require("./controllers/categoriesControllers");
const imagesControllers = require("./controllers/imagesControllers");
const usersControllers = require("./controllers/usersControllers");
const { authorization, isAdmin } = require("./controllers/usersControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/pastries", pastriesControllers.browse);
router.get("/pastries/:id", pastriesControllers.read);
router.post("/pastries", authorization, isAdmin, pastriesControllers.add);
router.put("/pastries/:id", authorization, isAdmin, pastriesControllers.edit);
router.delete(
  "/pastries/:id",
  authorization,
  isAdmin,
  pastriesControllers.destroy
);

router.get("/categories", categoriesControllers.browse);

router.get("/images", imagesControllers.browse);
router.post("/login", usersControllers.login);
router.post("/register", usersControllers.register);
router.get("/logout", authorization, usersControllers.logout);

module.exports = router;
