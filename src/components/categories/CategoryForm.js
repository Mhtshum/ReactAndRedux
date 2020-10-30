import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';

export const CategoryForm = ({category, onChange, errors, onSave, categories,saving}) => {  
  const changeHandler=(e)=>{
    const { name, value } = e.target;
    onChange(name, value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    onSave();
  };
  
  return (
    <form className="form" onSubmit={submitForm}>  
      <h2>{category.id ? 'Update Category' : 'Add Category'}</h2>  
      { errors.onSave 
        && <div className="alert alert-danger">{errors.onSave}</div>
      }
      <TextInput
        value={category.name}
        onChange={changeHandler}
        error={errors.name}
        label='name'
        name='name'
      />
      <SelectInput
        value={category.subCategoryId || ''}
        onChange={changeHandler}
        error={errors.subCategory}
        label='Parent Category'
        name='subCategoryId'
        defaultOption='Select Category'
        options={
          categories.map(c=>{
            return {value: c.id,text: c.name};
          })
        }
      />
      <button type='submit' className="btn btn-primary" disabled={saving}>{saving ? 'Saving ...' : 'Save'}</button>   
    </form>
  );
};

CategoryForm.propTypes = {
  category: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  categories: PropTypes.array.isRequired
};