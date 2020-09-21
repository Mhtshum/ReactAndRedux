import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import Proptypes from 'prop-types';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursePage extends React.Component
{
  state = {
    course : {
      id : 0,
      title : '',
      authorId : 1,
      category : 'JavaScript'	  
    }
  };     
  
  handleChange = e => {
    const course = {...this.state.course, title : e.target.value};    
    this.setState({course}); 
    //console.log(this.state.course);
  };
   
  handleSubmit = e => {	  
    e.preventDefault();
    /*alert(this.state.course.title);
    const course = {...this.state.course, id : this.props.courses.length+1};
    this.setState({course}); 	
    this.props.actions.courseActions.createCourse(this.state.course);*/
  };  
  
  componentDidMount(){
    const { actions, courses, authors } = this.props;	  
    if(courses.length ===0) {
      actions.courseActions.loadCourses()
        .catch(err=> alert(' Error in loading course '+err)); 
    }
    if(authors.length ===0) {	
      this.props.actions.loadAuthors()
        .catch(err=> alert(' Error in loading author '+err));   
    }  
  }  
  
  render(){
    //onsbumit on form enable enter key also submit while on button only clicking on button and also not recommended for accessibility mean while if button is used then type should be submit
    return (
      <div>	
        <form onSubmit={this.handleSubmit}>        
          <h3>Add course</h3>
          <input type='text' onChange={this.handleChange} text={this.state.course.title} />
          <input type='submit' value='Save'/>
        </form>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </div>
    );    
  }
}

CoursePage.proptypes = {
  actions:Proptypes.object.isRequired,
  courses:Proptypes.array.isRequired,
  authors:Proptypes.array.isRequired
};

function mapsStateToProps(state){
  return { courses : state.authors.length === 0 ? [] : state.courses.map(c=> {return {...c,authorName: state.authors.find(a=>a.id === c.authorId).name};}), authors : state.authors};	
}

function mapDispatchToProps(dispatch){
  return {
    actions : { 
      courseActions : bindActionCreators(courseActions,dispatch),
      loadAuthors : bindActionCreators(authorActions.loadAuthors,dispatch)	  
    }  	  
  };	
}

export default connect(mapsStateToProps,mapDispatchToProps)(CoursePage);