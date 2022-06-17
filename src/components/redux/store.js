import { createStore } from 'redux';
import rootReducer from './rootreducer';

const store = createStore(rootReducer);

export default store;

// react redux exports component is called as cakeReducer