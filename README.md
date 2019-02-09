# redux-count-handson

## 概要

redux でカウントアップ、カウンドダウンを行う。なお react との接続は行わない。

機能: action に応じて、カウントを増減させる

## 起動

```
$ npm install

$ node index.js
```

## 解説

reducer は, state と action を受け取り、action に応じて新しい state を返すだけの関数

store は, `createStore()`関数に reducer を入れてあげることで作られる

store.dispatch()の中に action オブジェクトを入れることで、reducer に action を通知することができる。(dispatch される度に reducer が動くイメージ)

=> **つまり store を dispatch して action を reducer に伝えることで新しい state を作ることができる**
