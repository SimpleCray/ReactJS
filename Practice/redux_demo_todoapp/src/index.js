import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import TodoApp from './containers/TodoApp';
import rootReducer from './reducers/rootReducer';

// initialState
const initialState = {}

// Create store
const store = createStore(rootReducer, initialState);

const appRoot = (
    <Provider store={store}>
        <div>
            <TodoApp />
        </div>
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'))
