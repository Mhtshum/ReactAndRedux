import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="jumbotron">
    <h1>React Redux Router</h1>
    <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
  </div>    
);

export default HomePage;
