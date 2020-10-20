import React from 'react';
const CategoriesList = ({categories}) => {
  return (categories.length === 0 
    ? <div>No category found!</div>
    : <table className='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Parent Category</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(c => 
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.subCategory}</td>
            <td>{c.name}</td>
          </tr>)
        }        
      </tbody>
    </table>);
};
export default CategoriesList;
