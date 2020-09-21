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
  onChange:PropTypes.func.isRequired,
  error:PropTypes.string,
  value:PropTypes.string,
  name:PropTypes.string.isRequired,
  placeholder:PropTypes.string,
  label:PropTypes.string.isRequired,
};

export default TextInput;