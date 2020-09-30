import React from "react";
import { shallow } from 'enzyme';
import CourseForm from '../CourseForm';

const renderCourseForm = (args) => {
  const defaultProps = {
    course : {},
    authors : [], 
    onSave : () => {}, 
    onChange : () => {}, 
    saving : false, 
    errors : {}     
  };  
  const props = { ...defaultProps , ...args};
  return shallow(<CourseForm {...props} />);  
};

it("renders form and header", () => {  
  const wrapper = renderCourseForm();
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Courses");
});


it("Button label should say Save", () => {  
  const wrapper = renderCourseForm();
  expect(wrapper.find("button").text()).toEqual("Save");
});


it("Button label should say Saving when saving", () => {  
  const wrapper = renderCourseForm({ saving: true});
  expect(wrapper.find("button").text()).toEqual("Saving ...");
});
