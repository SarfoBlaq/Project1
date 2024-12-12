const express = require('express');
const router = express.Router();

const { greetingController, greetController } = require("../Controlers/greetings")

router.post("/hello", greetingController);
router.post("/hello/:name", greetController)

module.exports = router

