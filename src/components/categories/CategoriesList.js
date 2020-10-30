import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesList = ({categories, onDelete}) => {
  return (categories.length === 0 
    ? <div>No category found!</div>
    : <table className='table'>
      <thead>
        <tr>
          <th>Parent Category</th>
          <th>Name</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {categories.map(c => 
          <tr key={c.id}>            
            <td>{c.subCategory}</td>
            <td><Link to={'/category/'+c.id}>{c.name}</Link></td>
            <td><button className='btn btn-primary' onClick={()=>onDelete(c)} >Delete</button></td>
          </tr>)
        }        
      </tbody>
    </table>);
};
export default CategoriesList;
