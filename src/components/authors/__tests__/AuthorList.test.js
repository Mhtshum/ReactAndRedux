import React from 'react';
import { shallow } from 'enzyme'; 
import AuthorList from '../AuthorList';

it("Should show multiple trs with table when authors more than zero",()=>{
  const authors = [
    { id : 1, name : 'a'},
    { id : 2, name : 'b'},
    { id : 3, name : 'c'},
  ];  
  const wrapper = shallow(<AuthorList authors={authors} />);    
  expect(wrapper.find('table').length).toBe(1);
  expect(wrapper.find('tr').length).toBe(4);
});


it("Should show div saying 'No authors found!' when authors zero",()=>{
  const authors = [];  
  const wrapper = shallow(<AuthorList authors={authors} />);    
  expect(wrapper.find('table').length).toBe(0);
  expect(wrapper.find('div').text()).toBe('No authors found!');
});
