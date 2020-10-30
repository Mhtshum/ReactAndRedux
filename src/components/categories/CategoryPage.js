import React, { useEffect, useState }from 'react';
import { Redirect }from 'react-router-dom';
import { connect } from 'react-redux';
import {loadCategories, deleteCategory} from '../../redux/actions/categoryActions';
import Spinner from '../common/Spinner';
import CategoriesList from './CategoriesList';

export const CategoryPage = ({categories, loadCategories, deleteCategory}) => {  
  const [isAddNew, setIsAddNew ] = useState(false);
    
  useEffect(() => {
    if(categories.length === 0 ) {
      loadCategories()
        .catch(er=> alert(' Error in loading categories : ' + er));
    }
  },{});
  
  const addNewClick = (e) => {
    e.preventDefault();
    setIsAddNew(true);
  };
  
  return (
    categories.length === 0 
      ? <Spinner />
      :
      <>
        {isAddNew && <Redirect to='/category' />}
        <h2>Categories</h2>
        <button className="btn btn-primary" onClick={addNewClick} style={{marginBottom:20}}>Add Category</button>
        <CategoriesList categories={categories} onDelete={deleteCategory}/>
      </>
  ); 
};

function mapStateToProps({categories}){
  const dispCategories = categories.length === 0 ? [] 
    : categories.map( c => { 
      return { 
        ...c , 
        subCategory : c.subCategoryId === -1 || c.subCategoryId === null ? '' 
          : categories.find(ct => ct.id === c.subCategoryId).name
      };       
    });
  return {
    categories : dispCategories
  };  
}
const mapDispatchToProps = {
  loadCategories,
  deleteCategory
};  

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);