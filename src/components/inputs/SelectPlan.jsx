import React, { useContext } from 'react';
import Context from '../../store/Context';
import styles from './Inputs.module.css';

const SelectPlan = () => {
  const { allPlans, setPlan, plan } = useContext(Context);
  return (
    <div className={styles.divInput}>
      <label htmlFor="destination">Plans</label>
      <select
        className={`${styles.input}  custom-select my-lg-0`}
        id="destination"
        required
        onChange={({ target }) => setPlan(target.value)}>
        {!plan && <option defaultValue="selected">...</option>}
        {allPlans &&
          allPlans.map((item, index) => (
            <option key={index} value={item.plan_name}>
              {item.plan_name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectPlan;
