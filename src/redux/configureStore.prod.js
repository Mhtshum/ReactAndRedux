import { createStore , applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  // this will help us in debugging in browser
  // need to check whether we need any setting for production
  return createStore(
    rootReducer, 
    initialState,
    applyMiddleware(thunk)
  );	
}