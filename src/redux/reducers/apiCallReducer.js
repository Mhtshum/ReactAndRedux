import { BEGIN_API_CALL, API_CALL_ERROR } from '../actions/actionTypes';
import initialData from './initialData';

export default function apiCallReducer(state = initialData.apiCallsInProgress, action){  
  if (action.type === BEGIN_API_CALL) {
    return state + 1;
  }else if ( action.type === API_CALL_ERROR || isActionEnded(action.type)) {
    return state - 1;
  }
  return state;
}

const isActionEnded = (typeName) => {
  return typeName.substring(typeName.length-8) === '_SUCCESS';
};