import React from 'react';
import { Link } from 'react-router-dom';

function AuthorList({authors, onDelete}){
  function deleteClick(e,author){
    e.preventDefault();
    onDelete(author);
  }
  return (
    <>
    { authors.length > 0 
      ? 
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th />
          </tr>	  
        </thead>
        <tbody>{ authors.map( author => 
        { return (
          <tr key={author.id}>        
            <td><Link to={'/author/'+ author.id}>{author.name}</Link></td>
            <td><button className='btn btn-outline-danger' onClick= {(e)=>deleteClick(e, author)}>Delete</button> </td>
          </tr>
        );
        }) 
        }
        </tbody>    
      </table>        
      : <div className="alert alert-warning" role="alert">No authors found!</div>
    }  
    </>
  );    
}

export default AuthorList;
