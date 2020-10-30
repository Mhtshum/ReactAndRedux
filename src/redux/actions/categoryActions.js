import * as categoryApi from '../../api/categoryApi';
import { apiCallBegin, apiCallFails} from './apiCallsActions';
import { categoryActionsTypes } from './actionTypes';

export const loadCategoriesSuccess = (categories) =>{
  return { type : categoryActionsTypes.LOAD_CATEGORIES_SUCCESS, categories};
}; 

const createCategorySuccess = (category) => {
  return { type : categoryActionsTypes.CREATE_CATEGORY_SUCCESS, category };
};

const updateCategorySuccess = (category) => {
  return { type : categoryActionsTypes.UPDATE_CATEGORY_SUCCESS, category };
};

export const loadCategories = () => {
  return (dispatch) => {
    dispatch(apiCallBegin());
    return categoryApi.getCategories()
      .then( categories => dispatch(loadCategoriesSuccess(categories)))
      .catch(err => {           
        dispatch(apiCallFails(err));
        throw err;
      });
  };    
};

export function saveCategory (category){
  return (dispatch) => {
    dispatch(apiCallBegin());
    return categoryApi.saveCategory(category)
      .then( savedCategory => category.id 
        ? dispatch(updateCategorySuccess(savedCategory))
        : dispatch(createCategorySuccess(savedCategory))
      )
      .catch(err => {           
        dispatch(apiCallFails(err));
        throw err;
      });
  };    
}

function deleteCategoryOptimistic(category){
  return { type: categoryActionsTypes.DELETE_CATEGORY_OPTIMISTIC, category};
}

export function deleteCategory(category){
  return (dispatch) => {
    dispatch(deleteCategoryOptimistic(category));
    return categoryApi.deleteCategory(category.id);  
  };    
}
