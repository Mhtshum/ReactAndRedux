import React from 'react';
import {shallow} from 'enzyme';
import { CategoryForm } from '../CategoryForm';

describe('ut > CategoryForm',()=>{
  /*
  it('should show Add ',()=>{
    const propsDummy = {
      category : {id : null}
    };
    const wrapper = shallow(<CategoryForm {...propsDummy} />);
    expect(wrapper.find('h2').text().indexOf('Add') > -1).toBeTruthy();
  });
  */
  
  it('should show Update ',()=>{
    const categoryProp = {
      category:{id:1, subCategoryId : -1, name : 'JavaScript'},
      onChange : jest.fn(),
      errors: {},
      onSave: jest.fn()
    };
    const categories = [
        {id:1, subCategoryId : -1, name : 'a'},
        {id:2, subCategoryId : -1, name : 'b'}
    ];
    const onSave = jest.fn();
    const wrapper = shallow(<CategoryForm 
      {...categoryProp} 
      onSave={onSave}
      categories={categories}
      />);    
    expect(wrapper.find('h2').text().indexOf('Update') > -1).toBeTruthy();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('TextInput').length).toBe(1);
    expect(wrapper.find('TextInput').props().value).toBe('JavaScript');
    expect(wrapper.find('SelectInput').length).toBe(1);    
    const eArgs = { 
      target : { value : 'test'},
      preventDefault: jest.fn()
    };
    wrapper.find('form').simulate('submit',eArgs);
    expect(onSave).toHaveBeenCalledTimes(1);    
  });
});