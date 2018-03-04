import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

import { fetchCategories } from './actions/categories';

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware, // neat middleware that logs actions
    )),
);

// Load initial data
store.dispatch(fetchCategories());

export default store;
