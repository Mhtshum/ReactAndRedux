import {authorActionsTypes} from '../actions/actionTypes';
import initialData from './initialData';
//parameter is default state
//export default used then any class importing it could name the import any name
export default function authorReducer(state = initialData.authors, action){
  switch(action.type){
    case authorActionsTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}