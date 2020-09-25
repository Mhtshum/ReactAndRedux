import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {loadCourses, saveCourse} from '../../redux/actions/courseActions';
import {loadAuthors} from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';

const ManageCourse = ({courses, authors, loadAuthors, loadCourses, saveCourse, ...props}) => { 
  const [ course, setCourse ] = useState({...props.course});  
  const [ errors ] = useState({});  
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
  
  const saveChanges = (e) => {
    e.preventDefault();
    saveCourse(course)
      .catch(err=> alert('Error in saving course ' + err));
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // below method can not access name & value if it has not been destructure as on above line
    setCourse( prevCourse => ({
      ...prevCourse, 
      [name] : name === 'authorId' ? parseInt(value, 10) : value
    }));
  };
  
  return (
    <CourseForm onChange={handleChange} course={course} errors={errors} authors={authors} onSave={saveChanges} />
  );      
};

ManageCourse.propTypes = {
  course:PropTypes.object.isRequired,
  courses:PropTypes.array.isRequired,
  authors:PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapsStateToProps(state){
  return { 
    courses : state.courses, 
    authors : state.authors,
    course: newCourse
  };    
}

// this could be confusion below thus we can use * courseActions & authorActions b/c loadCourses & loadAuthors are same, these bound or passed actions would be available via props inside the ManageCourse component not those available via import 
const mapDispatchToProps = {
  loadCourses,
  saveCourse,
  loadAuthors     
};

// here via connect we are passing boher state & actions its like injection into the Presentation component (defined aboue )
export default connect(mapsStateToProps,mapDispatchToProps)(ManageCourse);