const redux = require("redux");

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_UP":
      return { ...state, count: state.count + 1 };
    case "COUNT_DOWN":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: state.count - 1 };
    default:
      return;
  }
};

const store = redux.createStore(reducer);

store.dispatch({ type: "COUNT_UP" });
console.log("1回COUNT_UPしてみた結果: ", store.getState());
store.dispatch({ type: "COUNT_DOWN" });
store.dispatch({ type: "COUNT_DOWN" });
console.log("2回COUNT_DOWNしてみた結果: ", store.getState());
store.dispatch({ type: "RESET" });
console.log("RESETしてみた結果: ", store.getState());
