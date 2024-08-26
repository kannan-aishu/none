const express = require('express');
const {  Postcreateoreder } = require('../controllers/orderconroller');
const router = express.Router();
router.route('/order').post(Postcreateoreder)

module.exports = router;