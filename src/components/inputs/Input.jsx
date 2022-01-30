import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder }) => {
  return (
    <div>
      <input
        type="number"
        className="form-control mr-sm-2"
        placeholder={placeholder}
        aria-label="Search"
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
