import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';

const CourseForm = ({
  course, 
  authors, 
  onSave, 
  onChange, 
  saving = false, 
  errors = {} 
}) => { 
    
  return (
    <form onSubmit={onSave}> 
      <h2>{ course.id ? 'Edit' : 'Add' } Courses</h2>
      { errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>  
      )}
      <TextInput 
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput 
        name="authorId"
        label="Author"
        value={course.authorId || ''}
        defaultOption="Select Author"
        options = {
          authors.map(a => { return {
            value: a.id,
            text: a.name
          };})
        }
        onChange={onChange}
        error={errors.author}
      />
      <TextInput 
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <button className="btn btn-primary" disabled={saving} type="submit">{saving ? 'Saving ...' : 'Save'}</button>
    </form>
  );      
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  authors:PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool  
};

export default CourseForm;