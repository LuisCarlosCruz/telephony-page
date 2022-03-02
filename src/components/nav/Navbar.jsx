import React from 'react';
import Button from '../button/Button';
import Input from '../inputs/Input';
import SelectDestionation from '../inputs/SelectDestionation';
import SelectOrigin from '../inputs/SelectOrigin';
import SelectPlan from '../inputs/SelectPlan';
import styles from './Nav.module.css';

const Navbar = () => {
  return (
    <div>
      <form className={`${styles.formNav} form-inline my-2 my-lg-0 `}>
        <SelectOrigin />
        <SelectDestionation />
        <SelectPlan />
        <Input placeholder={'time'} />
        <Button search={'Search'} />
      </form>
    </div>
  );
};

export default Navbar;
