import * as categoryApi from '../../api/categoryApi';
import { apiCallBegin, apiCallFails} from './apiCallsActions';
import { categoryActionsTypes } from './actionTypes';

export const loadCategoriesSuccess = (categories)=>{
  return { type : categoryActionsTypes.LOAD_CATEGORIES_SUCCESS, categories};
}; 

export function loadCategories (){
  return (dispatch) => {
    dispatch(apiCallBegin());
    return categoryApi.getCategories()
      .then( categories => dispatch(loadCategoriesSuccess(categories)))
      .catch(err => {           
        dispatch(apiCallFails());
        throw err;
      });
  };    
}
