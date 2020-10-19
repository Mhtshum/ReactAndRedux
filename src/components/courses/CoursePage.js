import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import * as categoryActions from '../../redux/actions/categoryActions';
import Proptypes from 'prop-types';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import Spinner from '../common/Spinner';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

class CoursePage extends React.Component
{
  state = {
    redirectToAddCoursePage : false
  };     
     
  deleteCourse = (c) => {
    toast.success('Course deleted!');
    this.props.actions.courseActions
      .deleteCourse(c)
      .catch((e)=>{
        toast.error('Course deletion failed: ' + e.message, {autoClose: false});
        this.refreshCourses();
      });
  };
  
  refreshCourses = () => {    
    this.props.actions.courseActions.loadCourses()
      .catch((e)=>
        toast.error(' Error in loading course : ' + e.message, {autoClose: false})); 
  };
   
  componentDidMount(){
    const { actions, courses, authors, categories } = this.props;
    
    if(categories.length ===0) {
      actions.loadCategories();
    }
    
    if(courses.length ===0) {
      this.refreshCourses();
    }
    if(authors.length ===0) {	
      actions.loadAuthors()
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
            <CourseList courses={this.props.courses} onDelete={this.deleteCourse} />
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
      state.authors.length === 0 || state.categories.length === 0 
        ? [] : state.courses.map(c=> 
        {
          return { 
            ...c,
            authorName: state.authors.find(a=>a.id === c.authorId).name,
            category : state.categories.find(ct=>ct.id === c.categoryId).name
          };
        }), 
    authors : state.authors,
    categories : state.categories,
    isLoading : state.apiCallsInProgress > 0
  };	
}

function mapDispatchToProps(dispatch){
  return {
    actions : { 
      courseActions : bindActionCreators(courseActions,dispatch),
      loadAuthors : bindActionCreators(authorActions.loadAuthors,dispatch),
      loadCategories: bindActionCreators(categoryActions.loadCategories,dispatch)
    }  	  
  };	
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);