import React from 'react';
import {shallow} from 'enzyme';
import { ManageCategory } from '../ManageCategory';

describe('ut > ManageCategory', () => {
  it('shows CategoryForm', ()=>{
    const propsDummy = {
      propsCategory : {id : 1, subCategoryId : -1, name : 'JavaScript'},
      categories : [
        {id:1, subCategoryId : -1, name : 'a'},
        {id:2, subCategoryId : -1, name : 'b'}
      ],
      saveCategory : jest.fn()
  
    };
    const wrapper = shallow(<ManageCategory {...propsDummy}/>);
    expect(wrapper.find('CategoryForm').length).toBe(1);
  });
});