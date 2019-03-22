'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();
module.exports = router ;

router.use(express.static(path.join(__dirname, '../build')));

// 掲示板への投稿データ受け取り
router.post('/postMessage', function(req, res) {
    // フォームの text1 という項目の取得
    console.log(req.body);

    //エラー判定
    res.send(JSON.stringify({error: 'エラーコード'}));
});

// アカウント登録 データ受け取り
router.post('/register_account', function(req, res) {
    // フォームの text1 という項目の取得
    console.log(req.body.text1);

    //エラー判定
    res.send(JSON.stringify({error: 'エラーコード'}));
});

// ログインデータ受け取り
router.post('/login', function(req, res) {
    // フォームの text1 という項目の取得
    console.log(req.body.text1);

    //エラー判定
    res.send(JSON.stringify({error: 'エラーコード'}));
});

router.get('/notice_boards', function(req, res) {
    // フォームの text1 という項目の取得
    console.log(req.body.text1);

    //エラー判定
    res.send(JSON.stringify({data: 'データです'}));
});