const express = require('express');
const router = express.Router();
const busController = require('../controllers/busControllers');

router.get('/:seat', busController.getAllBuses);
router.post('/', busController.addBus);

module.exports = router;