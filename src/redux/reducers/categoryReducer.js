import {categoryActionsTypes} from '../actions/actionTypes';
import initialData from './initialData';

export default function categoryReducer(state = initialData.categories, action) {
  switch(action.type) {
    case categoryActionsTypes.LOAD_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}
