import {categoryActionsTypes} from '../actions/actionTypes';
import initialData from './initialData';

export default function categoryReducer(state = initialData.categories, action) {
  switch(action.type) {
    case categoryActionsTypes.LOAD_CATEGORIES_SUCCESS:
      return action.categories;    
    case categoryActionsTypes.UPDATE_CATEGORY_SUCCESS:
      return state.map(c=> c.id === action.category.id ? action.category : c);
    case categoryActionsTypes.DELETE_CATEGORY_OPTIMISTIC:
      return state.filter(c=> c.id !== action.category.id);  
    case categoryActionsTypes.CREATE_CATEGORY_SUCCESS:
      return [...state, {...action.category}];        
    default:
      return state;
  }
}
