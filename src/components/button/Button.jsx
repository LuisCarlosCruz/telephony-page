import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../store/Context';
import { valueCall } from '../../services/api';
import { calcPriceCall } from '../../utils/calcPriceCall';
import styles from './Button.module.css';

const Button = ({ search }) => {
  const { origin, setAllData, time, destination, plan, setNoPlan, setWitfPlan } =
    useContext(Context);

  const handleOnClick = async () => {
    try {
      const callObj = await valueCall(origin, time, destination[0], plan);
      console.log(callObj);
      setAllData(callObj);
      calcPriceCall(callObj, time, setWitfPlan, setNoPlan);
    } catch (err) {
      alert('Invalid search');
      location.reload(true);
    }
  };

  return (
    <div className={styles.divButton}>
      <button
        className="btn btn-outline-info my-2 my-sm-0"
        type="button"
        disabled={origin && time && destination ? false : true}
        onClick={() => handleOnClick()}>
        {search}
      </button>
    </div>
  );
};

Button.propTypes = {
  search: PropTypes.string,
};

export default Button;
