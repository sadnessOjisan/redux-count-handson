const redux = require("redux");

/**
 * @typedef {Object} Store
 * @property {Number} count countの数値
 */

/**
 * @typedef {Object} Action
 * @property {String} type actionの識別子
 * @property {mixed?} payload actionのデータ
 */

const initialState = {
  count: 0
};

/**
 * reducer
 * @param {Store} state
 * @param {*} action
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_UP":
      return { ...state, count: state.count + 1 };
    case "COUNT_DOWN":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return initialState;
    default:
      return;
  }
};

/**
 * reducerからstoreを作れる
 */
const store = redux.createStore(reducer);

store.dispatch({ type: "COUNT_UP" });
console.log("1回COUNT_UPしてみた結果: ", store.getState());
store.dispatch({ type: "COUNT_DOWN" });
store.dispatch({ type: "COUNT_DOWN" });
console.log("2回COUNT_DOWNしてみた結果: ", store.getState());
store.dispatch({ type: "RESET" });
console.log("RESETしてみた結果: ", store.getState());
