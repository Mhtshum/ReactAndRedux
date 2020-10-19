import React from 'react';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';

const AuthorForm = ({author, saveAuthor, nameChange, isSaving = false, errors = {} }) => {    
  function saveChanges(e){
    e.preventDefault();
    saveAuthor();
  }
  
  const onChange = (e) => {
    e.preventDefault();
    nameChange(e.target.value);
  };

  return (<form onSubmit={saveChanges}>
    <h1>{ author && author.id ? 'Edit' : 'Add' } Author</h1>  
    { errors.onSave && (
      <div className="alert alert-danger" role="alert">
        {errors.onSave}
      </div>  
    )}  
    <TextInput 
      name="name" 
      label="Name" 
      onChange={onChange} 
      value={author.name} 
      error={errors.name}
    />
    <button className="btn btn-primary" type="submit" disabled={isSaving}> 
      { isSaving ? 'Saving...' : 'Save' } 
    </button>
  </form> 
  );    
};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  nameChange: PropTypes.func.isRequired,
  saveAuthor: PropTypes.func.isRequired,
  errors: PropTypes.object,
  isSaving: PropTypes.bool  
};

export default AuthorForm;
