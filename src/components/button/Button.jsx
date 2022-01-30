import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ search }) => {
  return (
    <div>
      <button className="btn btn-outline-info my-2 my-sm-0" type="button">
        {search}
      </button>
    </div>
  );
};

Button.propTypes = {
  search: PropTypes.string,
};

export default Button;
