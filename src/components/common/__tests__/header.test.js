import React from "react";
import { shallow, mount } from 'enzyme';
import Header from '../../common/header';
import { MemoryRouter } from 'react-router-dom';

//shallow testing REACT tags
it("Header has 5 navlinks", () => {  
  const wrapper = shallow(<Header/>);
  const navArray = wrapper.find('NavLink');  
  const routeArray = navArray.filterWhere((item) => item.prop('to') === '/categories' );    
  expect(navArray.length).toBe(5);
  expect(routeArray).toHaveLength(1);

});

//mount testing HTML tags final realistic DOM
it("Header render 5 hyperlink a in dom", () => {  
  const wrapper = mount(
    <MemoryRouter>
      <Header/>
    </MemoryRouter>  
  );
  expect(wrapper.find("a").length).toBe(5);
});

