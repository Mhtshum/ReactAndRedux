import * as courseApi from '../../api/courseApi';
import { courseActionsTypes } from './actionTypes';
import { apiCallBegin, apiCallFails } from './apiCallsActions';

const createCourse = (course) => {
  return {type: courseActionsTypes.CREATE_COURSE,course};
};

const saveCourseSuccess = (course) => {
  return {type: courseActionsTypes.CREATE_COURSE_SUCCESS, course};
};

const updateCourseSuccess = (course) => {
  return {type: courseActionsTypes.SAVE_COURSE_SUCCESS, course};
};

const loadCoursesSuccess = (courses) => {
  return { type: courseActionsTypes.LOAD_COURSES_SUCCESS, courses};	
};

const loadCourses = () => {
  return (dispatch) => {
    dispatch(apiCallBegin());
    return courseApi.getCourses()
      .then( courses =>	dispatch(loadCoursesSuccess(courses)))
      .catch( error => { 
        dispatch(apiCallFails(error));
        throw error;
      });
  };	
};

const saveCourse = (course) => {
  // args are dispatch, getState. to access store and to pass it to thunk 
  return (dispatch) => {
    dispatch(apiCallBegin());
    return courseApi.saveCourse(course)
      .then( (savedCourse) =>	
        course.id 
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(saveCourseSuccess(savedCourse)))
      .catch( error => { 
        dispatch(apiCallFails(error));
        throw error;
      });
  };
};

export { createCourse, loadCoursesSuccess, loadCourses, saveCourse };
