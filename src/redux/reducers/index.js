import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import apiCallsInProgress from './apiCallReducer';

// reducers added below needed to be named by slice of state it is working on then component you can access state by same name
const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress
});
export default rootReducer;