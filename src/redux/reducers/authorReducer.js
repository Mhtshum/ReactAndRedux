import {authorActionsTypes} from '../actions/actionTypes';
import initialData from './initialData';
//parameter is default state
//export default used then any class importing it could name the import any name
export default function authorReducer(state = initialData.authors, action){
  switch(action.type){
    case authorActionsTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    case authorActionsTypes.CREATE_AUTHOR_SUCCESS:
      return [...state,{...action.author}];  
    case authorActionsTypes.UPDATE_AUTHOR_SUCCESS:
      return state.map(a => a.id === action.author.id ? action.author : a);
    case authorActionsTypes.DELETE_AUTHOR_OPTIMISTIC:
      return state.filter(a => a.id !== action.author.id);      
    default:
      return state;
  }
}
