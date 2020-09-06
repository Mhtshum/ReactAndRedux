import {courseActionsTypes} from '../actions/courseActions';

//parameter is default state
//export default used then any class importing it could name the import any name
export default function courseReducer(state = [], action){
  switch(action.type){
    case courseActionsTypes.CREATE_COURSE:
      return [...state,{...action.course}];
    default:
      return state;
  }
}