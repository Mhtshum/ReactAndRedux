import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {loadCourses} from '../../redux/actions/courseActions';
import {loadAuthors} from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

const ManageCourse = ({courses, authors, loadAuthors, loadCourses}) => { 
  useEffect(()=> {    
    if(courses.length ===0) {
      loadCourses()
        .catch(err=> alert(' Error in loading course '+err)); 
    }
    if(authors.length ===0) {   
      loadAuthors()
        .catch(err=> alert(' Error in loading author '+err));   
    }  
  }, []);  
  
  return (
    <> 
      <h2>Manage Courses</h2>
    </>
  );      
};

ManageCourse.propTypes = {
  courses:PropTypes.array.isRequired,
  authors:PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapsStateToProps(state){
  return { 
    courses : state.courses, 
    authors : state.authors
  };    
}

// this could be confusion below thus we can use * courseActions & authorActions b/c loadCourses & loadAuthors are same, these bound or passed actions would be available via props inside the ManageCourse component not those available via import 
const mapDispatchToProps = {
  loadCourses,
  loadAuthors     
};

// here via connect we are passing boher state & actions its like injection into the Presentation component (defined aboue )
export default connect(mapsStateToProps,mapDispatchToProps)(ManageCourse);