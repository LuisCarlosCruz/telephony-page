import React, { useContext } from 'react';
import Context from '../../store/Context';
import PropTypes from 'prop-types';
import { getCallPossible } from '../../services/api';
import styles from './Inputs.module.css';

const SelectOrigin = () => {
  const { allDDD, setOrigin, setDestpossible, origin } = useContext(Context);

  const handleOnChange = async ({ value }) => {
    setOrigin(+value);
    const callP = await getCallPossible(value);
    const dest = callP.map((item) => item.destination_id_DDD);
    const arr = [];
    allDDD.forEach(({ id_DDD, code_DDD }) => {
      return dest.map((item) => item === id_DDD && arr.push(code_DDD));
    });
    // setDestination(arr);
    setDestpossible(['', ...arr]);
  };

  return (
    <div className={styles.divInput}>
      <label htmlFor="origin">Origin</label>
      <select
        className={`${styles.input} custom-select my-lg-0`}
        id="origin"
        onChange={(e) => handleOnChange(e.target)}>
        {!origin && <option defaultValue="selected">...</option>}
        {allDDD &&
          allDDD.map(({ id_DDD, code_DDD }) => (
            <option key={id_DDD} value={code_DDD}>
              {code_DDD}
            </option>
          ))}
      </select>
    </div>
  );
};

SelectOrigin.propTypes = {
  value: PropTypes.string,
};

export default SelectOrigin;
