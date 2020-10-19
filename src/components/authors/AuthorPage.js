import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '../common/Spinner';
import AuthorList from './AuthorList';
import { loadAuthors, deleteAuthor } from '../../redux/actions/authorActions';
import { loadCourses } from '../../redux/actions/courseActions';

export class AuthorPage extends React.Component {  
  state = {
    redirectToAddAuthor : false
  };
  
  componentDidMount() {
    this.refreshAuthors();       
  }  
  
  refreshAuthors(){
    const { courses, authors, loadAuthors, loadCourses } = this.props;
    if(authors.length === 0) {
      loadAuthors()
        .catch(err=> alert(' Error in loading authors '+err)); 
    }
    
    if(courses.length === 0) {
      loadCourses()
        .catch(err=> alert(' Error in loading couses '+err)); 
    }    
  }
  
  isCourseAssigned = (author) => {
    const { courses } = this.props;
    const anyCourse = courses.find(c => c.authorId === author.id);
    return anyCourse || null;
  }
  
  onDeleteAuthor = (author) => {
    if(this.isCourseAssigned(author)){
      toast.error( author.name + ' can not be deleted, please unassign from any course ', {autoClose: false});
      return;      
    }
    
    toast.success(author.name + ' deleted successfully');
    this.props.deleteAuthor(author)
      .catch(e=> {
        toast.error('Author deletion failed: ' + e.message, {autoClose: false});
        this.refreshAuthors();
      });    
  };
  
  render = () =>{
    return (
      <>
        {this.state.redirectToAddAuthor && <Redirect to="/author" />}
        { this.props.isLoading 
          ? <Spinner />
          :
           <>
             <h1>Authors</h1>
              <button style={{ marginBottom : 20 }} onClick={()=> this.setState({ redirectToAddAuthor : true})}  className="btn btn-primary add-author">Add Author</button>            
              <AuthorList authors={this.props.authors} onDelete={this.onDeleteAuthor} />
           </>   
        }  
      </>    
    );
  }  
}

function mapStateToProps({ authors, courses, apiCallsInProgress }){
  return {
    authors,
    courses,
    isLoading : apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  loadAuthors,
  deleteAuthor,
  loadCourses  
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);