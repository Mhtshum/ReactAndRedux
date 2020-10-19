import React from 'react';
import { connect } from 'react-redux';
import AuthorForm from './AuthorForm';
import Spinner from '../common/Spinner';
import { saveAuthor, loadAuthors} from '../../redux/actions/authorActions';
import { toast } from 'react-toastify';

export class SaveAuthorPage extends React.Component {      
     
  state = {
    errors : {},
    isSaving : false,    
    author: this.props.author  
  };

  componentDidMount(){
    const { authors, loadAuthors, author } = this.props;    
    if(authors.length === 0){
      loadAuthors()
        .catch(err=> alert(' Error in loading course '+err)); 
    } else {
      this.setState({ author : author});
    }    
  }
  
  saveAuthorChanges = () => {            
    const { saveAuthor } = this.props;  
    const { author } = this.state;  
    
    if(!this.validate(author)) {return;}    
    this.setState({ isSaving : true });
    
    return saveAuthor(author)
      .then( () => {
        toast.success(author.name + ' saved successfully! ');        
        this.props.history.push('/authors');
      })
      .catch( error => {
        this.setState({ isSaving : false });
        this.setState({errors : { onSave : error.message }});                
      });
  } 
  
  nameChange = (nameText) => {
    this.setState({ author :  {...this.state.author, name: nameText}});
  }  

  validate(){
    const { author } = this.state;
    const { authors } = this.props;
    let errors = {};
    if(!author.name) { errors.name = 'Name is required!'; }
    if(authors.filter(a => author.id !== a.id && a.name === author.name
    ).length > 0) { 
      errors.name = 'Author exists with this name!';
    }
    
    /*
    if(author.id){
      if(authors.filter(a => author.id !== a.id && a.name === author.name).length > 0) { 
        errors.name = 'Author exists with this name!';
      } 
    }else{
      if(authors.filter(a => a.name === author.name).length > 0) { 
        errors.name = 'Author exists with this name!';
      }     
    }*/  
    this.setState({errors:errors});
    return Object.keys(errors).length === 0;
  }
    
  componentDidUpdate(prevProps) {    
    if (this.props.author.name !== prevProps.author.name) {
      this.setState({ author: this.props.author });
    }
  }
    
  render() {
    const { author, isSaving, errors } = this.state;
    return this.props.authors.length === 0 ? <Spinner /> : <AuthorForm author={author} saveAuthor={this.saveAuthorChanges} nameChange={this.nameChange} isSaving={isSaving} errors={errors} />;
  }  
}

function getAuthorById(id, authors){
  return authors.find(a => a.id === id) || null;
}

function mapStateToProps(state , ownProps){
  const { authors } = state;   
  const id = parseInt(ownProps.match.params.id, 10);    
  const author = id && authors.length > 0  
    ? getAuthorById( id, authors)
    : {id : null ,name : ''};  
  return {
    authors,
    author
  };  
}

const mapDispatchToProps = {  
  saveAuthor,
  loadAuthors  
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveAuthorPage);
