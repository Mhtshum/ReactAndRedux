import React from 'react';
import { connect } from 'react-redux';
import { createCourse } from '../../redux/actions/courseActions';
import Proptypes from 'prop-types';

class CoursePage extends React.Component
{
  state = {
    course : {
      title : ''
    }
  };     
  
  handleChange = e => {
    const course = {...this.state.course, title : e.target.value};    
    this.setState({course}); 
    //console.log(this.state.course);
  };
   
  handleSubmit = e => {	  
    e.preventDefault();
    alert(this.state.course.title);
    this.props.dispatch(createCourse(this.state.course));
  };  
  
  render(){
    //onsbumit on form enable enter key also submit while on button only clicking on button and also not recommended for accessibility 
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input type='text' onChange={this.handleChange} text={this.state.course.title} />
        <input type='button' value='Save'/>
        { this.props.courses.map(c=>
          <div key={c.title}>{c.title}</div>
        )}
      </form>);    
  }
}

CoursePage.proptypes = {
  dispatch:Proptypes.func.isRequired,
  course:Proptypes.array.isRequired
};

function mapsStateToProps(state){
  return { courses : state.courses};	
}
export default connect(mapsStateToProps)(CoursePage);