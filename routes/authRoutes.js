const router = require("express").Router();
const {getUsers,loginController, createUserController} = require("../Controller/authController");

router.get("/users",getUsers);
router.post("/user",createUserController);
router.post("/login",loginController);


module.exports = router;
