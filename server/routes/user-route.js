const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

const userController = require("../controllers/user-controller");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.delete("/logout",auth, userController.logout);
router.get("/profile",auth, userController.profile);


module.exports = router;
