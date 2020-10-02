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
});  