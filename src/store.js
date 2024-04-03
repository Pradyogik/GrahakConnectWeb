import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import signupReducer from '../src/redux/signupReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
 
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;