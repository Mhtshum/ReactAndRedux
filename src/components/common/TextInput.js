import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  error
}) => {
  let wrapperClass = 'form-group' +  (error && error.length > 0 ? ' has-errors' : '');
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <input 
          name={name} 
          value={value} 
          type='text'
          className='form-control'        
          onChange={onChange} 
          placeholder={placeholder}
        />
        { error && <div className="alert alert-danger">{error}</div>}
      </div> 
    </div>
  );
};

TextInput.propTypes = {
  value:PropTypes.string,
  error:PropTypes.string,
  placeholder:PropTypes.string,
  name:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
};

export default TextInput;