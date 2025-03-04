// Import Dependencies and Modules
const express = require("express");
const userController = require("../controllers/user");

// Routing Component
const router = express.Router();

router.delete("/delete-duplicate", userController.deleteDuplicateUser);

router.patch("/friend-to-user", userController.friendToUser);

module.exports = router;
