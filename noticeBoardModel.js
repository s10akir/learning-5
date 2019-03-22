'use strict'

// mongooseの読み込み
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// スキーマの定義
// NoticeBoard = 掲示板
NoticeBoard = new Schema({
    boardID = int,
    boardTitle = string,
    boradDate = date,
    boardCreator = User,
    boradContent = string
});

// モデル登録
mongoose.model('NoticeBoard' , NoticeBoard);
