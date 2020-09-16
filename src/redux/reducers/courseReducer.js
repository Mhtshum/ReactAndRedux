import {courseActionsTypes} from '../actions/actionTypes';
import initialData from './initialData';
//parameter is default state
//export default used then any class importing it could name the import any name
export default function courseReducer(state = initialData.courses, action){
  switch(action.type){
    case courseActionsTypes.CREATE_COURSE:
      return [...state,{...action.course}];
    case courseActionsTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}