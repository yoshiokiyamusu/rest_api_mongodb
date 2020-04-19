const path = require('path');
const express = require('express');
const shopController = require('../controllers/server');
const router = express.Router();

router.get('/prueba', shopController.getJsonDataPrueba);


module.exports = router;