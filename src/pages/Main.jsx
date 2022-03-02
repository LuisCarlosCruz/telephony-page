import React, { useContext, useEffect } from 'react';
import CardValue from '../components/cardValue/CardValue';
import Header from '../components/header/Header';
import Navbar from '../components/nav/Navbar';
import { getAllPlans, getAllDDD } from '../services/api';
import Context from '../store/Context';
import imgGirl from '../assets/img/girlCall.jpg';
import imgMen from '../assets/img/menCall.jpg';
import styles from './Main.module.css';

const Main = () => {
  const { setAllDDD, setAllPlans, allData, origin, destination, witfPlan, noPlan } =
    useContext(Context);

  useEffect(() => {
    getAllDDD(setAllDDD);
    getAllPlans(setAllPlans);
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <section className={styles.main}>
        {allData && (
          <CardValue param={{ allData, origin, destination, noPlan, notPlan: 'No Plan', imgMen }} />
        )}
        {allData && <CardValue param={{ allData, origin, destination, witfPlan, imgGirl }} />}
      </section>
    </div>
  );
};

export default Main;
