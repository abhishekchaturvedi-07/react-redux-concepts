// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './DyanamicStyle.css';

const DyanamicStyle = () => {
  let colors = [];
  let result = '';
  const [value, setValue] = useState();
  const handleChange = (e) => setValue(e.target.value);
  //Logic
  if (value <= 33) {
    colors.push('text-red');
    result = 'FAIL';
  } else if (value > 33 && value < 101) {
    colors.push('text-green');
    result = 'PASS';
  } else {
    colors.push('text-purple');
    result = 'Please Enter Valid Value between 0 to 100!';
  }
  return (
    <div>
      <div class='alert alert-info marginTop15' role='alert'>
        DYANAMIC STYLING
      </div>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='Please Enter marks to check if you are pass or fail'
        style={{ width: '40rem' }}
      />
      <p className={colors}>{result}</p>
    </div>
  );
};

export default DyanamicStyle;
