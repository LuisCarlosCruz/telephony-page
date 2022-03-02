import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../store/Context';
import styles from './Inputs.module.css';

const Input = ({ placeholder }) => {
  const { setTimecall } = useContext(Context);

  const handleOnChange = ({ value }) => {
    setTimecall(+value);
  };

  return (
    <div className={styles.divInput}>
      <label htmlFor="time">Time</label>
      <input
        type="number"
        className={`${styles.input} form-control mr-sm-2`}
        placeholder={placeholder}
        aria-label="Search"
        min="0"
        id="time"
        required
        onChange={(event) => handleOnChange(event.target)}
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
