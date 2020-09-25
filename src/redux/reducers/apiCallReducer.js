import { BEGIN_API_CALL } from '../actions/actionTypes';
import initialData from './initialData';

export default function apiCallReducer(state = initialData.apiCallsInProgress, action){  
  if (action.type === BEGIN_API_CALL) {
    return state + 1;
  }else if (isActionEnded(action.type)) {
    return state - 1;
  }
  return state;
}

const isActionEnded = (typeName) => {
  return typeName.substring(typeName.length-8) === '_SUCCESS';
};