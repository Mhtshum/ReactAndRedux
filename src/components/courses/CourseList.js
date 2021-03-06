import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CourseList = ({courses,onDelete}) => (
  <table className='table'>
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th />
      </tr>	  
    </thead>
    <tbody>{ courses.map( course => 
    { return (
      <tr key={course.id}>
        <td><a className='btn btn-light' href={course.slug}>watch</a></td>	
        <td><Link to={'/course/'+ course.slug}>{course.title}</Link></td>
        <td>{course.authorName}</td> 
        <td>{course.category}</td>
        <td><button className='btn btn-outline-danger' onClick= {()=>onDelete(course)}>Delete</button> </td>
      </tr>
    );
    }) 
    }
    </tbody>    
  </table>
); 

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,   
  onDelete: PropTypes.func 
};

export default CourseList;