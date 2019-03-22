'use strict'

// mongooseの読み込み
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// スキーマの定義
// User = アカウント
const User = new Schema({
    userID : string, // 学籍番号
    userPass : string,
    userToken : string // ランダムな文字列（セッションIDでもある）
});

// モデル登録
mongoose.model('User' , User);

mongoose.connect('mongodb://localhost/User', {useNewUrlParser: true});

const createUser = ((readUserID, readPassword) => {
    // モデルの呼び出し
    const User = mongoose.model('User');

    // 新規レコードの作成
    new User({
        userID: readUserID,
        userPassword: readPassword,
        userToken: ''
    }).save();
});

const updateTokenKey = ((readUserID, TokenKey) => {
    // モデルの呼び出し
    const User = mongoose.model('User');

    User.update(
        {userID: readUserID},
        {userToken: TokenKey}
    )
})