const express = require('express');
const router = express.Router(); // 產生 router 物件，存入這個參數中
const mainController = require('../controllers/mainController');

router.get('/', mainController.homepage);
router.get('/about', mainController.about);

// 將 router 導出，等別人 require 引入使用
module.exports = router;