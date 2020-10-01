import * as courseActions from '../courseActions';
import { courseActionsTypes } from '../actionTypes';
import { courses } from '../../../../tools/mockData';

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
