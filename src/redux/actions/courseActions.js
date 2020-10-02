import * as courseApi from '../../api/courseApi';
import { courseActionsTypes } from './actionTypes';
import { apiCallBegin, apiCallFails } from './apiCallsActions';

export const saveCourseSuccess = (course) => {
  return {type: courseActionsTypes.CREATE_COURSE_SUCCESS, course};
};

export const updateCourseSuccess = (course) => {
  return {type: courseActionsTypes.SAVE_COURSE_SUCCESS, course};
};

const loadCoursesSuccess = (courses) => {
  return { type: courseActionsTypes.LOAD_COURSES_SUCCESS, courses};	
};

function deleteCourseOptimistic(course){
  return { type: courseActionsTypes.DELETE_COURSE_OPTIMISTIC, course};
}

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

function deleteCourse(course){
  return (dispatch) => {
    dispatch(deleteCourseOptimistic(course));
    // this optimistic it is good to unhandle error
    return courseApi.deleteCourse(course.id);
  };  
}

export { loadCoursesSuccess, loadCourses, saveCourse, deleteCourse };
