import React from "react";
import {shallow} from 'enzyme';
import { CategoryPage } from '../CategoryPage';

describe('uts => category interface',()=>{
  it('category contains H2, CategoriesList Add new Category',()=>{
    const props = {
      categories : [
        {id:1, subCategoryId : -1, name : 'a'}
      ],
      loadCategories : jest.fn()
    };
    const wrapper = shallow(<CategoryPage {...props} />);
    expect(wrapper.find('h2').text()).toBe('Categories');
    expect(wrapper.find('button').text()).toBe('Add Category');
    expect(wrapper.find('CategoriesList').length).toBe(1);
  });
  
  it('category show Spinner when no categories',()=>{
    const props = {
      categories : [],
      loadCategories : jest.fn()
    };
    const wrapper = shallow(<CategoryPage {...props} />);
    expect(wrapper.find('Spinner').length).toBe(1);
  });  
});