import React from 'react';
import Button from '../button/Button';
import Input from '../inputs/Input';
import SelectDestionation from '../inputs/SelectDestionation';
import SelectOrigin from '../inputs/SelectOrigin';

const Navbar = () => {
  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <SelectOrigin />
        <SelectDestionation />
        <Input placeholder={'Call Time'} />
        <Button search={'Search'} />
      </form>
    </div>
  );
};

export default Navbar;
