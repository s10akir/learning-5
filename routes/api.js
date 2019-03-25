'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();
module.exports = router;

// ボディーパーサー
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));

router.use(express.static(path.join(__dirname, '../build')));

// 掲示板への投稿データ受け取り
router.post('/post_message', function(req, res) {
    // console.log(req.body.title);
    // console.log(req.body.content);

    //エラー判定
    res.send(JSON.stringify({error: 'エラーコード'}));
});

// アカウント登録 データ受け取り
router.post('/register_account', function(req, res) {
    // console.log(req.body.text1);

    //エラー判定
    res.send(JSON.stringify({error: 'エラーコード'}));
});

// ログインデータ受け取り
router.post('/login', function(req, res) {
    // console.log(req.body.text1);

    //エラー判定
    res.send(JSON.stringify({error: 'エラーコード'}));
});

router.get('/notice_boards', function(req, res) {
    // console.log(req.body.text1);

    //エラー判定
    res.send(JSON.stringify({data: 'データです'}));
});