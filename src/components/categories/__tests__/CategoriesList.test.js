import React from "react";
import {shallow} from 'enzyme';
import CategoriesList from '../CategoriesList';

describe('uts => category list',()=>{
  it('category list show div with no categories for passed empty categories',()=>{
    const props = {categories : []};
    const wrapper = shallow(<CategoriesList {...props}/>);    
    expect(wrapper.find('div').text()).toBe('No category found!');
  });     
    
  it('category list show table for passed categories',()=>{
    const props = {
      categories : [
        {id:1, subCategoryId : -1, name : 'a'},
        {id:2, subCategoryId : -1, name : 'b'}
      ]
    };
    const wrapper = shallow(<CategoriesList {...props}/>);    
    expect(wrapper.find('table').length).toBe(1);
    expect(wrapper.find('thead').length).toBe(1);    
    expect(wrapper.find('th').length).toBe(3);    
    expect(wrapper.find('tbody > tr').length>1).toBeTruthy();    
//    expect(wrapper.find('Link').length>1).toBeTruthy();    
  });  
});