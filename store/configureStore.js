import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import callTraceMiddleware from '../middleware/callTraceMiddleware';
const finalCreateStore = compose(
    applyMiddleware(callTraceMiddleware, thunk, api),
    applyMiddleware(createLogger())
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    return store;
}
