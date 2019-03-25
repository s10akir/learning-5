'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();

// buildフォルダを外部へ公開
router.use(express.static(path.join(__dirname, '../build')));

module.exports = router;
