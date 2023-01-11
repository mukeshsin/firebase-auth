// Import express
const express = require("express");

const createUser = require("../controllers/auth.controllers.js");
const updateUserProfile = require("../controllers/auth.controllers.js");
const addFriend = require("../controllers/auth.controllers.js");
// Init express router
const router = express.Router();

router.post("/add/User", createUser);
router.put("/add/user/profile", updateUserProfile);
router.post("/add/user/addUser",addFriend);

module.exports = router;
