'use strict';

// DB接続
require(path.join(__dirname, '../connect'));

const path = require('path');
const express = require('express');
const router = express.Router();
module.exports = router;

// DB
const User = require(path.join(__dirname, '../user'));
const user = new User();
const NoticeBoard = require(path.join(__dirname, '../noticeBoard'));
const noticeBoard = new NoticeBoard();

// ボディーパーサー
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));

// buildフォルダを外部へ公開
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