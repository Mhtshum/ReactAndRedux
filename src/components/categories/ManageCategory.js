import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CategoryForm } from './CategoryForm';
import Spinner from '../common/Spinner';
import {saveCategory, loadCategories} from '../../redux/actions/categoryActions';
import { toast } from 'react-toastify';

export const ManageCategory = ({ categories, saveCategory, loadCategories, history ,...props}) => { 
  const [ category, setCategory ] = useState({...props.category});
  const [ isSaving, setIsSaving ] = useState(false);  
  const [ errors, setErrors ] = useState({});  
  
  useEffect(() => {
    if(categories.length === 0 ) {
      loadCategories()
        //.then(()=> alert('Done loading categories :' + categories.length))
        .catch(er => alert('Error in loading categories : ' + er));
    } else {
      setCategory({...props.category});
    } 
  },[props.category]);
  
  const handleChange = (name, value) =>{    
    
    setCategory( prevCat => ({
      ...prevCat, 
      // following will set both properties based on input names
      [name] : name.indexOf('Id') > -1 ? parseInt(value,10) : value
    }));    
  };
  
  const saveChanges = () =>{        
    setIsSaving(true);
    if(!isValidCategory()) { return;}
    saveCategory(category)
      .then(()=>{
        toast.success(category.name + ' saved!');
        history.push('/categories');
      })
      .catch(er => {
        setErrors({ onSave : er.message});
        setIsSaving(false);        
      });
  };
  
  const isValidCategory = () => {
    let errors = {};
    if(!category.name) { errors.name = 'Name is required!';}
    setErrors(errors);
    return Object.keys(errors).length === 0 ;
  };
  
  return (
    categories.length === 0 
      ?<Spinner />
      :<CategoryForm 
        saving={isSaving}
        errors={errors} 
        category={category}  
        onChange={handleChange} 
        onSave={saveChanges} 
        categories={categories}/>
  );
};

function getCategoryById(categories, id){
  return categories.find(c=>c.id === id) || null;
}

// if moved inside mapStateToProps then would be local to that fn. and when passed via props would change every time on mapStateToProps
const newCategory = { 
  id : null, 
  subCategoryId : -1 , 
  name : ''
};

function mapStateToProps(state ,ownProps){
  const idParam = parseInt(ownProps.match.params.id, 10);          
  
  //alert('categories are : ' + state.categories.length);
  const category = 
    idParam && state.categories.length > 0 
      ? getCategoryById(state.categories, idParam)  
      : newCategory; 
  
  return {
    category, 
    categories : state.categories
  };
}

const mapDispatchToProps = {
  saveCategory,
  loadCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategory);