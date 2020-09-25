import * as courseApi from '../../api/courseApi';
import { courseActionsTypes } from './actionTypes';

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
    return courseApi.getCourses()
      .then( courses =>	dispatch(loadCoursesSuccess(courses)))
      .catch( error => { 
        throw error;
      });
  };	
};

const saveCourse = (course) => {
  // args are dispatch, getState. to access store and to pass it to thunk 
  return (dispatch) => {
    return courseApi.saveCourse(course)
      .then( (savedCourse) =>	
        course.id 
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(saveCourseSuccess(savedCourse)))
      .catch( error => { 
        throw error;
      });
  };
};

export { createCourse, loadCoursesSuccess, loadCourses, saveCourse };
