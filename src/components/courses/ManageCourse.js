import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {loadCourses, saveCourse} from '../../redux/actions/courseActions';
import {loadAuthors} from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

const ManageCourse = ({courses, authors, loadAuthors, loadCourses, saveCourse, history, ...props}) => { 
  const [ course, setCourse ] = useState({...props.course});  
  const [ saving, setSaving ] = useState(false);    
  const [ errors ] = useState({});  
  
  //when props changes we need to update our state it is running only once when component mount 
  useEffect(()=> {    
    if(courses.length ===0) {
      loadCourses()
        .catch(err=> alert(' Error in loading course '+err)); 
    }
    else {
      // this will copy course passed in on props to state anytime new course is passed in
      setCourse({...props.course});
    }
    if(authors.length === 0) {   
      loadAuthors()
        .catch(err=> alert(' Error in loading author '+err));   
    }  
  }, [props.course]);  
  
  const saveChanges = (e) => {
    e.preventDefault();
    setSaving({ saving : true });
    saveCourse(course)
      .then(() => {
        //setSaving({ saving : false });
        toast.success('Course saved successfully');
        history.push('/courses');
      })
      .catch(err=> alert('Error in saving course ' + err));
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // below method can not access name & value if it has not been destructure as on above line
    setCourse( prevCourse => ({
      ...prevCourse, 
      // following will set both properties based on input names for authorId & category
      [name] : name === 'authorId' ? parseInt(value, 10) : value
    }));
  };
  
  return (
    authors.length === 0 || courses.length === 0
      ? <Spinner /> 
      : <CourseForm onChange={handleChange} course={course} errors={errors} authors={authors} saving={saving} onSave={saveChanges} />
    
  );      
};

ManageCourse.propTypes = {
  course:PropTypes.object.isRequired,
  courses:PropTypes.array.isRequired,
  authors:PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  history: PropTypes.object
};

function getCourseBySlug( courses, slug){
  return courses.find(c => c.slug === slug) || null ;
}

function mapsStateToProps(state, ownProps){  
  const slug = ownProps.match.params.slug;  
  const displayCourse = slug && state.courses.length > 0 ? getCourseBySlug(state.courses,slug) : newCourse;
  return { 
    courses : state.courses, 
    authors : state.authors,
    course: displayCourse
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