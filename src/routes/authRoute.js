const express = require("express");
const login = require("../controllers/auth/login");
const register = require("../controllers/auth/register");
const googleLogin = require("../controllers/auth/googleLogin");
const googleRegister = require("../controllers/auth/googleRegister");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/google/login", googleLogin);
router.post("/google/register", googleRegister);

module.exports = router;
