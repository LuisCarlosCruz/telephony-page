import React from 'react';
import styles from './CardValue.module.css';

const CardValue = ({ param }) => {
  const { allData, /*  origin, destination, */ witfPlan, notPlan, noPlan, imgMen, imgGirl } = param;
  const { selectPlan } = allData;

  return (
    <div className={styles.card}>
      <div className={styles.titleCard}>
        <h4> {notPlan ? notPlan : selectPlan.plan_name}</h4>
        {/* <p>
          from:<span>{origin}</span> to:<span>{destination}</span>
        </p> */}
        <p>
          R$ <span>{notPlan ? noPlan : witfPlan}</span>
        </p>
      </div>
      <div className={styles.divImg}>
        {<img src={notPlan ? imgMen : imgGirl} alt="foto" className={styles.img} />}
      </div>
    </div>
  );
};

export default CardValue;
