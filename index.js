const redux = require("redux");

/**
 * reduxのstore. アプリ全体のstateを管理する. このアプリケーションではcountをstateとして持つ.
 * @typedef {Object} Store
 * @property {Number} count countの数値
 */

/**
 * reduxのaction.
 * @typedef {Object} Action
 * @property {String} type actionの識別子
 * @property {mixed?} payload actionのデータ
 * @example const exampleAction = {type: 'HOGE', payload: 'sample_data'}
 */

/**
 * countのstateです。
 * reducerから更新されます。
 * @type {Store}
 */
const initialState = {
  count: 0
};

/**
 * reducerはstateを変更する役割を持ちます。古いstateとactionを元に、新しいstateを返します。
 * stateの破壊的変更は禁止されているので、新しいstateオブジェクトを作り直して返しています。
 * @param {Store} state 更新前のstate
 * @param {Action} action 更新内容を伝えるメッセージ
 * @return {Store} 新しいstate
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_UP":
      return { ...state, count: state.count + 1 }; // stateの破壊的変更は禁止されているので、新しいstateオブジェクトを作り直して返しています。
    case "COUNT_DOWN":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return initialState;
    default:
      return;
  }
};

/**
 * reduxのstoreです。`createStore()`にreducerを渡すことで生成できます。
 * store.dispatch(action)でactionをdispatchできます。
 * @type {Store}
 */
const store = redux.createStore(reducer);

store.dispatch({ type: "COUNT_UP" }); // actionをdispatchする
console.log("1回COUNT_UPしてみた結果: ", store.getState());
store.dispatch({ type: "COUNT_DOWN" });
store.dispatch({ type: "COUNT_DOWN" });
console.log("2回COUNT_DOWNしてみた結果: ", store.getState());
store.dispatch({ type: "RESET" });
console.log("RESETしてみた結果: ", store.getState());

// esdocで仕様書を生成するためにexport. アプリを動かすためならば、この処理は不要
export { store, reducer, initialState };
