const express = require('express');
const baseController = require('../controllers/base.controller');

const router = express.Router();

router.get('/',baseController.getHomepage);

module.exports = router