import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import tokenReducer from './reducers/tokenReducer';

const rootReducer = combineReducers({
  tokens: tokenReducer,
});

const store = createStore(rootReducer);

export default store;
