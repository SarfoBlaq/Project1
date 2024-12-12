const express = require('express');
const router = express.Router();

const healthcheck = require('./healthcheck')
const greetings = require("./greeting")

router.use("/healthcheck", healthcheck);
router.use("/greeting", greetings)

module.exports = router;