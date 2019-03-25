'use strict';

// requireで呼び出すことでdbとのコネクションを確立する。
// モデルを呼ぶ前にこのスクリプトを呼び出すこと。

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/leaning-5', { useNewUrlParser: true });
