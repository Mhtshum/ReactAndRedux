import React from "react";
import renderer from 'react-test-renderer';
import CourseForm from '../CourseForm';
import { courses, authors } from '../../../../tools/mockData';

it("when saving passed is true then label should say 'Saving' ", () => {
  const tree = renderer.create(<CourseForm
    course={courses[0]}
    authors={authors}
    onSave={jest.fn()}
    onChange={jest.fn()}
    saving
  />);
  expect(tree).toMatchSnapshot();
});

it("when saving passed is false then label should say 'Save' ", () => {
  const tree = renderer.create(<CourseForm
    course={courses[0]}
    authors={authors}
    onSave={jest.fn()}
    onChange={jest.fn()}
    saving={false}
  />);
  expect(tree).toMatchSnapshot();
});