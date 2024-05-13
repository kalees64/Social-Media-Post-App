const express = require("express");
const router = express.Router();

const auth = require("../controllers/usersAuth");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.get("/user/:id", auth.getUser);

module.exports = router;
