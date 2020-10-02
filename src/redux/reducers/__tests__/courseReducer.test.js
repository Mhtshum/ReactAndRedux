import courseReducer from '../courseReducer';
import { courses } from '../../../../tools/mockData';
import { courseActionsTypes } from '../../actions/actionTypes';
import * as courseActions from '../../actions/courseActions';

describe("course reducer", () => {
  it("When course created should return state with new course 'CREATE_COURSE_SUCCESS'", () => {
    //arragne
    const initialState = [
      { title : 'C'},
      { title : 'A'},
      { title : 'D'}
    ];
    const course = { title : 'B'};
    const saveAction = courseActions.saveCourseSuccess(course);
    //act
    const result = courseReducer(initialState, saveAction);
    
    //assert    
    expect(result[0].title).toEqual('C');
    expect(result.length).toEqual(4);
    expect(result[result.length-1].title).toEqual(course.title);
  });
  
  it("When course updated should return modified state", () => {
    //arragne
    const initialState = [
      { id: 1, title : 'C'},
      { id: 2, title : 'A'},
      { id: 3, title : 'D'}
    ];
    const course = { id : 3 ,title : 'B'};
    const saveAction = courseActions.updateCourseSuccess(course);
    //act
    const result = courseReducer(initialState, saveAction);
    
    //assert    
    expect(result[0].title).toEqual('C');
    expect(result.length).toEqual(3);
    expect(result[2].title).toEqual('B');
  });  
});
