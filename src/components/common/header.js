import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { fontStyle : 'oblique', backgroundColor : 'linear-gradient(red 100%, blue 0)', color: 'linear-gradient(white 100%, blue 0)',fontWeight:'bold' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{'|'} 
      <NavLink to="/course" activeStyle={activeStyle}>Courses</NavLink>{'|'}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </nav>
  );
};

export default Header;
