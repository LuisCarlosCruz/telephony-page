import React, { useContext } from 'react';
import Context from '../../store/Context';
import PropTypes from 'prop-types';
import styles from './Inputs.module.css';

const SelectDestionation = () => {
  const { destpossible, setDestination } = useContext(Context);

  return (
    <div className={styles.divInput}>
      <label htmlFor="destination">Destination</label>
      <select
        className={`${styles.input} custom-select my-lg-0`}
        id="destination"
        required
        onChange={({ target }) => setDestination([+target.value])}>
        {!destpossible && <option defaultValue="selected">...</option>}
        {destpossible &&
          destpossible.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

SelectDestionation.propTypes = {
  value: PropTypes.string,
};

export default SelectDestionation;
