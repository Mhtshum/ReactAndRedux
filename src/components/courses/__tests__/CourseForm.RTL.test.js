import React from "react";
import { cleanup, render } from 'react-testing-library';
import CourseForm from '../CourseForm';

afterEach(cleanup);

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
  return render(<CourseForm {...props} />);  
};

it("should render Add Courses Header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Courses");  
});

it("Button label should say Save when not saving", () => {  
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("Button label should say Saving when saving", () => {  
  const { getByText, debug } = renderCourseForm({ saving: true});
  getByText("Saving ...");
});
