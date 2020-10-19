import React from 'react';
import { shallow } from 'enzyme';
import AuthorForm from '../AuthorForm';

describe("Author Form for Add & Update author", () => {
  
  function getWrapperFor(authorToSave = {id : null , name : ''}){
    let props = { 
      author: authorToSave, 
      saveAuthor : jest.fn(),
      nameChange : jest.fn(),
      isSaving: false,
      errors:{}
    };
    return shallow(<AuthorForm {...props} />);
  }   
  
  it("should have form controls to input author", () => {       
    let wrapper = getWrapperFor()
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('TextInput').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });  
  
  it("should display Add Author if empty obj. is passed as props", () => {    
    let wrapper = getWrapperFor();
    expect(wrapper.find('h1').length).toEqual(1);    
    expect(wrapper.find('h1').text()).toEqual('Add Author');       
  });    
});  