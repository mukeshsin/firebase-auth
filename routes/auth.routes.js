// Import express
const express = require("express");

const createUser = require("../controllers/auth.controllers.js");

// Init express router
const router = express.Router();

router.post("/add/User", createUser);

module.exports = router;
