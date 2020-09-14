import { createStore, combineReducers, applyMiddleware } from "redux";
import todoReducer from "./todo";

const reducer = combineReducers({
  todo: todoReducer
});

// function myMiddleware(store){
//   return function(next) {
//     return function(action) {

//     }
//   }
// }
const myMiddleware = store => next => action => {
  console.log('Action: ', action)
  return next(action)
}

export default createStore(
  reducer,
  applyMiddleware(myMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
