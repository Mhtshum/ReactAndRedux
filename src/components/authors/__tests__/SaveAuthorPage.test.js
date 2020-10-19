import React from 'react';
import { shallow } from 'enzyme';
import { SaveAuthorPage } from '../SaveAuthorPage';

describe('Save Author Page', () => {    
  
  function getWrapperFor(author = {}){
    const thisProps = { 
      authors : [ { id : 1, name : 'a'}], 
      author
    }; 
    return shallow(<SaveAuthorPage {...thisProps}/>);        
  }
  
  it("validate for empty name", () => {
    let wrapper = getWrapperFor();      
    let isValid = wrapper.instance().validate();
    expect(isValid).toBe(false);
    expect(wrapper.instance().state.errors.name).toBe('Name is required!');
  });
  
  it("validate for existing name", () => {
    let wrapper = getWrapperFor({name : 'a'});      
    let isValid = wrapper.instance().validate();
    expect(isValid).toBe(false);
    expect(wrapper.instance().state.errors.name).toBe('Author exists with this name!');
  });
});
