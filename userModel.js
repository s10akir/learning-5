'use strict'

// mongooseの読み込み
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// スキーマの定義
// User = アカウント
User = new Schema({
    userID = string, // 学籍番号
    userPass = string,
    userToken = string // ランダムな文字列（セッションIDでもある）
});

// モデル登録
mongoose.model('User' , User);