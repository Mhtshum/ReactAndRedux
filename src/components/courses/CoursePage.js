import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import Proptypes from 'prop-types';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import Spinner from '../common/Spinner';
import { Redirect } from 'react-router-dom';

class CoursePage extends React.Component
{
  state = {
    redirectToAddCoursePage : false
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
      <>	
        { this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        { this.props.isLoading
          ? <Spinner />
          : 
          <>          
            <h2>Courses</h2>            
            <button 
              style={{marginBottom : 20 }} 
              className="btn btn-primary add-course" 
              onClick={() => this.setState({ redirectToAddCoursePage : true })}>Add Course</button>
            <CourseList courses={this.props.courses} />
          </>
        }
      </>
    );    
  }
}

CoursePage.proptypes = {
  actions:Proptypes.object.isRequired,
  courses:Proptypes.array.isRequired,
  authors:Proptypes.array.isRequired,
  isLoading:Proptypes.bool.isRequired
};

function mapStateToProps(state){  
  return { 
    courses : 
      state.authors.length === 0 
        ? [] : state.courses.map(c=> {return {...c,authorName: state.authors.find(a=>a.id === c.authorId).name};}), 
    authors : state.authors,
    isLoading : state.apiCallsInProgress > 0
  };	
}

function mapDispatchToProps(dispatch){
  return {
    actions : { 
      courseActions : bindActionCreators(courseActions,dispatch),
      loadAuthors : bindActionCreators(authorActions.loadAuthors,dispatch)	  
    }  	  
  };	
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);