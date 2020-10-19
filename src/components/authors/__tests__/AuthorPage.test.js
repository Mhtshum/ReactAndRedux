import React from 'react';
import { shallow } from 'enzyme';
import { AuthorPage } from '../AuthorPage';

describe('Author Page', () => {
  
  let wrapper = null;  
  const thisProps = { 
      authors : [ { id : 1, name : 'a'}], 
      courses : [ { id : 1, authorId : 1}, { id : 2, authorId : 1}], 
      loadAuthors : jest.fn(),
      loadCourses : jest.fn(),
      isLoading : false
    }; 
  wrapper = shallow(<AuthorPage {...thisProps}/>);        
  

  it("Should show button & AuthorList",()=>{          
    expect(wrapper.find('h1').text()).toEqual('Authors');
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('AuthorList').length).toBe(1);
    expect(wrapper.find('Redirect').length).toBe(0);
  });
  
  it("props & state with initial values",()=>{
    expect(wrapper.instance().props.authors.length).toBe(1);
    expect(wrapper.instance().props.courses.length).toBe(2);
    expect(wrapper.instance().props.isLoading).toBe(false);
    expect(wrapper.instance().state.redirectToAddAuthor).toBe(false);
  });    
  
  it("isCourseAssigned should return false course not assigned author",()=>{   
    expect(wrapper.instance().isCourseAssigned({id : 2})).toBe(null);    
  });   
  
  it("isCourseAssigned should return true course assigned author",() => {  
    expect(wrapper.instance().isCourseAssigned({id : 1})).not.toBe(null);    
  });   
  
  it('When add button click redirectToAddAuthor should be set', () => {    
    // working     
    expect(wrapper.state('redirectToAddAuthor')).toBe(false);      
    wrapper.find('button').simulate('click');    
    expect(wrapper.state('redirectToAddAuthor')).toBe(true);      
    expect(wrapper.find('Redirect').length).toBe(1);
  });    
  
  it('Show Spinner when isLoading true', () => {        
    //wrapper = shallow(<AuthorPage {...{...wrapper.instance().props,isLoading:true}} />);    
    wrapper = shallow(<AuthorPage {...{...thisProps,isLoading:true}} />);    
    expect(wrapper.find('Spinner').length).toBe(1);
  });    
});
