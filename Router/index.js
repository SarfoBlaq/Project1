const express = require('express');
const router = express.Router();

const healthcheck = require('./healthcheck')

router.use("/healthcheck", healthcheck);

module.exports = router;