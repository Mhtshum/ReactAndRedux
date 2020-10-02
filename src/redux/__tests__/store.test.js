import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialData from '../reducers/initialData';
import { saveCourseSuccess } from '../actions/courseActions';

describe(" integration test for store", () => {
  it("Triggering from actions for saving course",()=>{
    //arragnge
    const newCourse = { title : 'a' };
    const store = createStore(rootReducer,initialData);    
    
    //act 
    store.dispatch(saveCourseSuccess(newCourse));
    
    //assert
    expect(store.getState().courses.length).toEqual(1);
    //expect(store.getState().courses[0]).toEqual(newCourse);
  });
  
  it("Triggering from actions for saving course",()=>{
    //arragnge
    const newCourse1 = { title : 'a' };
    const newCourse2 = { title : 'b' };
    const newCourse3 = { title : 'c' };
    const store = createStore(rootReducer,initialData);         
    
    //act 
    store.dispatch(saveCourseSuccess(newCourse1));
    store.dispatch(saveCourseSuccess(newCourse2));
    store.dispatch(saveCourseSuccess(newCourse3));
    
    //assert
    expect(store.getState().courses.length).toEqual(3);
    //expect(store.getState().courses[0]).toEqual(newCourse1);
  });
  
});  