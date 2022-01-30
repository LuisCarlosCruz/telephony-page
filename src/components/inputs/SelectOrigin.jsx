import React, { useContext } from 'react';
import Context from '../../store/Context';
import PropTypes from 'prop-types';

import DDD from '../../DDD.json';

const SelectOrigin = () => {
  const { setOrigin, setDestination } = useContext(Context);

  const handleOnChange = ({ value }) => {
    const valueNum = +value;

    setOrigin(valueNum);

    const eleven = 11;

    valueNum === eleven ? setDestination([16, 17, 18]) : setDestination([eleven]);
  };

  return (
    <div>
      <label htmlFor="origin">
        Origin
        <select
          className="custom-select my-lg-0"
          id="origin"
          onChange={(e) => handleOnChange(e.target)}>
          {/* <option disabled value></option> */}
          {DDD &&
            DDD.map(({ id_DDD, code_DDD }) => (
              <option key={id_DDD} value={code_DDD}>
                {code_DDD}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
};

SelectOrigin.propTypes = {
  value: PropTypes.string,
};

export default SelectOrigin;
