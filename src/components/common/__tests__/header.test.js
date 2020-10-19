import React from "react";
import { shallow, mount } from 'enzyme';
import Header from '../../common/header';
import { MemoryRouter } from 'react-router-dom';

//shallow testing REACT tags
it("Header has 4 navlinks", () => {  
  const wrapper = shallow(<Header/>);
  expect(wrapper.find("NavLink").length).toBe(4);
});

//mount testing HTML tags final realistic DOM
it("Header render 4 hyperlink a in dom", () => {  
  const wrapper = mount(
    <MemoryRouter>
      <Header/>
    </MemoryRouter>  
  );
  expect(wrapper.find("a").length).toBe(4);
});

