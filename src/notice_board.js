import React,{Component} from "react";
import axios from "axios";

export default class Notice_board extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: [
                { title: '今後のプロジェクトの方針について', content: 'そのうちきめます。' },
                { title: '今日の昼飯', content: 'いい加減蒲田二郎に行ってみたい。この前ラーメン大行ったけどあそこは良かった。' },
                { title: 'MERNスタックの扱い方', content: 'ノリと勢いですべてを乗り切っている。' },
                { title: 'React覚える', content: 'わからん（わからん）' }
            ]
        };
        this.addPost = this.addPost.bind(this);
    }

    getPost() {
        axios(
            {
                method : 'GET',
                url    : '/api/posts'
            }).then(response => this.setState(response));
    }

    // 新規追加
    addPost() {
        // 追加
        axios({
                method: 'POST',
                url   : '/api/post_message',
                date: {
                    title: this.refs.title.value,
                    content: this.refs.content.value
                }
            }).then(response => this.checkResult(response));
        // 初期化
        this.refs.title.value = '';
        this.refs.content.value = '';
    }

    checkResult(response) {
        if (response.result === "Success") {
            this.getPost();
        }
    }


    // 削除機能
    deletePost(i) {
        // 削除
        this.state.post.splice(i, 1);
        // 保存
        this.setState({
            post: this.state.post
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='form-group'>
                    <label>Title</label>
                    <input type="text" ref="title" className='form-control' />
                </div>
                <div className='form-group'>
                    <label>content</label>
                    <textarea ref='content' className='form-control' rows='2' />
                </div>
                <div className='form-group'>
                    <button class='btn btn-outline-primary' onClick={this.addPost}>Post</button>
                </div>
                <button onClick={this.getPost()}>Update</button>
                <div>
                    {this.state.post.map((post, i) => {
                        return (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}