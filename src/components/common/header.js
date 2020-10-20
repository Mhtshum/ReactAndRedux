import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  //const activeStyle = { fontStyle : 'oblique', backgroundColor : 'linear-gradient(red 100%, blue 0)', color: 'linear-gradient(white 100%, blue 0)',fontWeight:'bold' };
  const activeStyle= {color:'orange'};
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{' | '} 
      <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>{' | '}
      <NavLink to="/authors" activeStyle={activeStyle}>Authors</NavLink>{' | '}
      <NavLink to="/categories" activeStyle={activeStyle}>Categories</NavLink>{' | '}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </nav>
  );
};

export default Header;
