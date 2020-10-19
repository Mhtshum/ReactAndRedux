import * as categoryActions from '../categoryActions';
import { categoryActionsTypes, BEGIN_API_CALL } from '../actionTypes';
import { categories } from '../../../../tools/mockData';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe("Async actions", () => {  
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  
  afterEach(() => {
    fetchMock.restore();
  });
  
  describe("load category actions", () => {
    it("should returned the BEGIN_API_CALL & LOAD_CATEGORIES_SUCCESS actions involved in thunk flow", () => {      
      //arrange
      fetchMock.mock('*', { 
        body : categories ,
        headers : { 'content-type' : 'application/json'}
      });
      
      const expectedActions = [
        { type : BEGIN_API_CALL},
        { type : categoryActionsTypes.LOAD_CATEGORIES_SUCCESS, categories}
      ];
      
      const store = mockStore({ categories : []});      

      //act      
      return store
        .dispatch(categoryActions.loadCategories())
        .then(()=>{
          expect(store.getActions()).toEqual(expectedActions);
        });            
    });  
  });
});
/*
describe("category actions", () => {
  it("When category create action fires should return action type 'CREATE_CATEGORIE_SUCCESS'", () => {
    //arragne
    const category = categories[0];
    const expectedAction = { type :categoryActionsTypes.CREATE_CATEGORIES_SUCCESS, category};    
    //act
    const result = categoryActions.saveCategorieSuccess(category);
    
    //assert
    expect(result).toEqual(expectedAction);
  });  
});
*/