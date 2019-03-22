import React, { Component } from 'react';
const ReactDOM = require('react-dom');
const axios = require('axios');

class App extends Component {
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
            url    : 'http://localhost:3000/api/notice_boards'
        }).then(response => this.setState(response));
    }

    // 新規追加
    addPost() {
        // 追加
        this.state.post.reverse();;
        this.state.post.push({
            title: this.refs.title.value,
            content: this.refs.content.value
        });
        this.state.post.reverse();;
        // 保存
        this.setState({
            post: this.state.post
        });
        // 初期化
        this.refs.title.value = '';
        this.refs.content.value = '';
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
                <h1>Hello BBS</h1>
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
                <button onClick={this.getPost()}>更新</button>
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

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
