import React from "react";
import { shallow, mount } from 'enzyme';
import App from '../App';

//shallow testing REACT tags
it("App has '/author' route", () => {  
  const wrapper = shallow(<App/>);
  const routeArray = wrapper.find('Route').filterWhere((item) => item.prop('path') === '/author' || item.prop('path') === '/author/:id' );    
  expect(routeArray).toHaveLength(2);
});

it("App has '/category' route", () => {  
  const wrapper = shallow(<App/>);
  const routeArray = wrapper.find('Route').filterWhere((item) => item.prop('path') === '/categories');    
  expect(routeArray).toHaveLength(1);
  /*
  expect(wrapper.find('Route')).toEqual(          // 1
    expect.arrayContaining([      // 2
      expect.objectContaining({ path : '/categories'})
    ])
  ); 
  */  
});
