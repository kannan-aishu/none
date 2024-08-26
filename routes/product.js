const express = require('express');
const { getProducts, getSingleProducts} = require('../controllers/conroller');

const router = express.Router();
router.route('/Products').get(getProducts)
router.route('/Product/:id').get(getSingleProducts)

module.exports = router;