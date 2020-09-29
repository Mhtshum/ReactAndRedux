import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  name,
  label,
  value,
  options,
  defaultOption,
  onChange,
  error
}) => {
  let wrapperClass = 'form-group' +  (error && error.length > 0 ? ' has-errors' : '');
  return (
  //selection is done by value no need custom logic for "selected"
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className='field'>      
        <select 
          name={name} 
          value={value}
          className='form-control'        
          onChange={onChange}          
        >
          <option key='0' value="">{defaultOption}</option>
          { 
            options.map(o => {
              return (
                <option key={o.value} value={o.value}>
                  {o.text}
                </option>
              );
            })  
          }
        </select>
        { error && <div className="alert alert-danger">{error}</div>}
      </div> 
    </div>
  );
};

SelectInput.propTypes = {
  error: PropTypes.string,
  defaultOption: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SelectInput;