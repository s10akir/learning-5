'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();
module.exports = router;

// DB関係
const mongoose = require('mongoose');
// require(path.join(__dirname, '../models/connect'));
require(path.join(__dirname, '../models/post'));
const Post = mongoose.model('Post');
require(path.join(__dirname, '../models/user'));
const User = mongoose.model('User');

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
    User.create({'data': 'data'})
        .then((result) => {
            res.send('aaa');
        })
        .catch((err) => {
            res.send('aaa');
        });

    //エラー判定
    res.send(JSON.stringify({error: 'エラーコード'}));
});

// ログインデータ受け取り
router.post('/login', function(req, res) {
    // console.log(req.body.text1);

    //エラー判定
    res.send(JSON.stringify({error: 'エラーコード'}));
});

router.get('/posts', function(req, res) {
    Post.find({})   // 全件検索
        .then((data) => {
            res.send(JSON.stringify(data));
        })
        .catch((err) => {
            //エラー処理
            console.log(err);
        });

    // エラー判定
    // res.send(JSON.stringify({data: 'データです'}));
});