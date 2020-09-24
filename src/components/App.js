import React from 'react';
import { Route,Switch } from 'react-router-dom';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/header';
import PageNotFound from './PageNotFound';
import CoursePage from './courses/CoursePage';
import ManageCourse from './courses/ManageCourse';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//slug is friendlier than number 
//routes are wrap inside switch if it found slug in url it would stop on first route with slug while if it got first the course route without slug then slug route would never load

function App(){
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/about" component={AboutPage} />
        <Route  path="/courses" component={CoursePage} />
        <Route  path="/course/:slug" component={ManageCourse} />
        <Route  path="/course" component={ManageCourse} />		
        <Route  component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>    
  );    
}

export default App;