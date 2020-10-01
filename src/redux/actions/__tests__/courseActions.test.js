import * as courseActions from '../courseActions';
import { courseActionsTypes, BEGIN_API_CALL } from '../actionTypes';
import { courses } from '../../../../tools/mockData';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe("Async actions", () => {  
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  
  afterEach(() => {
    fetchMock.restore();
  });
  
  describe("load course actions", () => {
    it("should returned the BEGIN_API_CALL & LOAD_COURSES_SUCCESS actions involved in thunk flow", () => {      
      //arrange
      fetchMock.mock('*', { 
        body : courses ,
        headers : { 'content-type' : 'application/json'}
      });
      
      const expectedActions = [
        { type : BEGIN_API_CALL},
        { type : courseActionsTypes.LOAD_COURSES_SUCCESS, courses}
      ];
      
      const store = mockStore({ courses : []});      

      //act      
      return store
        .dispatch(courseActions.loadCourses())
        .then(()=>{
          expect(store.getActions()).toEqual(expectedActions);
        });            
    });  
  });
});

describe("course actions", () => {
  it("When course create action fires should return action type 'CREATE_COURSE_SUCCESS'", () => {
    //arragne
    const course = courses[0];
    const expectedAction = { type :courseActionsTypes.CREATE_COURSE_SUCCESS, course};    
    //act
    const result = courseActions.saveCourseSuccess(course);
    
    //assert
    expect(result).toEqual(expectedAction);
  });  
});
