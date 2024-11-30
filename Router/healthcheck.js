
const express = require('express');
const router = express.Router();

const { healthcheck } = require('../Controlers/healthcheck')

router.get("/", healthcheck)


module.exports = router;