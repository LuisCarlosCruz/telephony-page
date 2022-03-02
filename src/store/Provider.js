import Context from './Context';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [allDDD, setAllDDD] = useState([]);
  const [allPlans, setAllPlans] = useState([]);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [destpossible, setDestpossible] = useState(null);
  const [time, setTimecall] = useState(null);
  const [plan, setPlan] = useState(null);
  const [witfPlan, setWitfPlan] = useState(null);
  const [noPlan, setNoPlan] = useState(null);
  const [allData, setAllData] = useState(null);

  const contextValue = {
    allDDD,
    setAllDDD,
    allPlans,
    setAllPlans,
    origin,
    setOrigin,
    destination,
    setDestination,
    time,
    setTimecall,
    plan,
    setPlan,
    destpossible,
    setDestpossible,
    witfPlan,
    setWitfPlan,
    noPlan,
    setNoPlan,
    allData,
    setAllData,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
