const { createStore } = require("redux");
const { default: rootReducer } = require("./reducers/rootReducer");

const store = createStore(rootReducer);
export default store;
