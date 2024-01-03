import  { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Если используется асинхронная логика в экшенах
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;