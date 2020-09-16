import * as courseApi from '../../api/courseApi';
import { courseActionsTypes } from './actionTypes';

const createCourse = (course) => {
  return {type: courseActionsTypes.CREATE_COURSE,course};
};

const loadCoursesSuccess = (courses) => {
  return { type: courseActionsTypes.LOAD_COURSES_SUCCESS, courses};	
};

const loadCourses = () => {
  return (dispatch) => {
    return courseApi.getCourses()
      .then( courses =>	dispatch(loadCoursesSuccess(courses)))
      .catch( error => { 
        throw error;
      });
  };	
};

export { createCourse, loadCoursesSuccess, loadCourses };

