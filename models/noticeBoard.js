'use strict';

// mongooseの読み込み
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// スキーマの定義
// NoticeBoard = 掲示板
const NoticeBoard = new Schema({
    boardID: Number,
    boardTitle: String,
    boradDate: Date,
    boardCreator: String,
    boradContent: String,
});

// モデル登録
mongoose.model('NoticeBoard', NoticeBoard);
