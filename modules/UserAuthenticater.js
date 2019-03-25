'use strict';

class UserAuthenticater{
    /**
     * UserIDとUserPassが正しいかの検証を行う。
     * @param {String} userID ユーザーID 
     * @param {String} userPass ユーザーパスワード
     * @return {boolean} パスワードが一致する場合trueを返す、その他の場合falseを返す。
     */

    referenceUser(userID,userPass){
        // TODO モデルからのユーザーデータ呼び出し
        const user = {
            // ダミーデータ
            userID: "UserID",
            userPass: "UserPass",
            userToken: "UserToken"
        }
        if(userPass === user.userPass){
            return true;
        }else{
            return false;
        }
    }

    /**
     * ランダムな10文字のトークンを発行する。
     * @param {String} userID ユーザーＩＤ
     */

    publishToken(userID){
        const length = 10;

        const char = "abcdefghijklmnopqrstuvwxyz1234567890^~-={[]}@`*:;+"

        let token = "";
        for(let i = 0; i < length; i++){
            token += char[Math.floor(Math.random() * char.length)];
        }

        // TODO トークンをＤＢに登録
        console.log(token);
    }
/**
 * ページを離れたときに使われる処理
 * @param {String} userID ユーザーID
 * @param {String} userToken ユーザートークン
 */
refreshToken(userID,userToken){
    window.onunload = function(){
        // TODO DBからTokenを消す処理の追加
        }
}

    /**
     * トークンの正当性の検証
     * @param {String} userID ユーザーＩＤ 
     * @param {String} userToken ユーザートークン
     * @return {boolean} 正確にトークンが一致していた場合true,それ以外の場合はfalseを返す。 
     */

    referenceToken(userID,userToken){
        // TODO モデルからのユーザーデータ呼び出し
        const user = {
            // ダミーデータ
            userID: "UserID",
            userPass: "UserPass",
            userToken: "UserToken"
        }
        if(user.userToken && userToken === user.userToken ){
            return true;
        }else{
            return false;
        }
    }

    /**
     * ログインをする。
     * IDとパスワードの一致を検証し、トークンを発行させる
     * @param {String} userID 
     * @param {String} userPass 
     * @return {boolean} 正確にログインできた場合はtrue,それ以外はfalseを返す。
     */

    login(userID,userPass){
        // TODO DBからuserIDとuserPassを持ってくる
        const user = {
            // ダミーデータ
            userID: "UserID",
            userPass: "UserPass",
            userToken: "UserToken"
        }
        if(userID === user.userID && userPass === user.userPass){
            this.publishToken(userID);
            return true;
        }else{
            return false;
        }

    }

    /**
     * ログアウト処理、トークンの削除をする。
     * @param {String} userID 
     * @param {String} userToken
     * @return {boolean} 正確にログアウトできた場合true、それ以外はfalseを返す。
     */
    logout(userID,userToken){
        if(this.referenceToken(userID,userToken)){
            //　TODO DBにトークンを削除する依頼       
            return true;    
        }else{
            return false;
        }
    }
}

const userauthenticater = new UserAuthenticater();
userauthenticater.publishToken("UserID");