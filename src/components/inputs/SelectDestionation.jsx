import React, { useContext } from 'react';
import Context from '../../store/Context';
import PropTypes from 'prop-types';

const SelectDestionation = () => {
  const { destination } = useContext(Context);

  return (
    <div>
      <label htmlFor="destination">
        Destination
        <select className="custom-select my-lg-0" id="destination">
          {destination &&
            destination.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
};

SelectDestionation.propTypes = {
  value: PropTypes.string,
};

export default SelectDestionation;
