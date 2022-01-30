import Context from './Context';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const contextValue = {
    origin,
    setOrigin,
    destination,
    setDestination,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
