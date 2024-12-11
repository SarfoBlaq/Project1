const express = require('express');
const router = express.Router();

const { greetingController } = require("../Controlers/greetings")

router.post("/hello", greetingController);

module.exports = router

