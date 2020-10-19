import React from "react";
import { courses, authors, newCourse, categories } from '../../../../tools/mockData';
import { mount } from 'enzyme';
import { ManageCourse } from '../ManageCourse';

const renderManageCourse = (args) => {
  const defaultProps = {    
    course : newCourse,
    authors,
    courses,  
    categories,  
    loadCategories : jest.fn(), 
    loadAuthors : jest.fn(), 
    loadCourses : jest.fn(), 
    saveCourse : jest.fn(), 
    history : {}, 
    match : {}     
  };  
  const props = { ...defaultProps , ...args};
  return mount(<ManageCourse {...props} />);  
};

it("should validate empty form on submit with 'Title is required'", () => {
  const wrapper = renderManageCourse();
  wrapper.find('form').simulate('submit');
  const error = wrapper.find('.alert').first();
  expect(error.text()).toBe("Title is required");
});
