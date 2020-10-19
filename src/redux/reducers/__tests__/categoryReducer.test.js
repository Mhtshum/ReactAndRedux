import * as categoryActions from '../../actions/categoryActions';
import categoryReducer from '../categoryReducer';

describe("Category Reducers", () => {    
  it("should return categories when dispatch action", () => {      
        
    //arrange
    const initialState = [];
    const categories = [
      { id : 1, subCategoryId : -1, categoryName : 'JavaScript' },
      { id : 2, subCategoryId : -1, categoryName : 'Python' }      
    ];
    const action = categoryActions.loadCategoriesSuccess(categories);
    
    //act
    const state = categoryReducer(initialState, action);    
        
    //assert 
    expect(state).toBe(categories);
  });  
});
