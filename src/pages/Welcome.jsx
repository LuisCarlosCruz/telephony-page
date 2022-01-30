import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const history = useNavigate();

  return (
    <div>
      <h1>Welcome</h1>
      <button type="submit" onClick={() => history('/main')}>
        Log on
      </button>
    </div>
  );
};

export default Welcome;
