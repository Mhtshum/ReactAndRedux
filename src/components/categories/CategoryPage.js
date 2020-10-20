import React,{ useEffect }from 'react';
import { connect } from 'react-redux';
import {loadCategories} from '../../redux/actions/categoryActions';
import Spinner from '../common/Spinner';
import CategoriesList from './CategoriesList';

export const CategoryPage = ({categories, loadCategories}) => {  
  useEffect(() => {
    if(categories.length === 0 ) {
      loadCategories()
        .catch(er=> alert(' Error in loading categories : ' + er));
    }
  });
  
  return (
    categories.length === 0 
      ? <Spinner />
      :
      <>
        <h2>Categories</h2>
        <button className="btn btn-primary" style={{marginBottom:20}}>Add Category</button>
        <CategoriesList categories={categories}/>
      </>
  ); 
};

function mapStateToProps({categories}){
  const dispCategories = categories.length === 0 ? [] 
    : categories.map( c => { 
      return { 
        ...c , 
        subCategory : c.subCategoryId === -1 ? '' 
          : categories.find(ct => ct.id === c.subCategoryId).name
      };       
    });
  return {
    categories : dispCategories
  };  
}
const mapDispatchToProps = {
  loadCategories
};  

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);