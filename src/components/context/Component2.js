import React, { useContext } from 'react';
import Component3 from './Component3';
// import {FirstName, LastName} from './Context'
import { Person } from './Context';

function Component2() {
  // const fName  = useContext(FirstName)
  // const lName  = useContext(LastName)
  const { FirstName, LastName } = useContext(Person);
  return (
    <div>
      {/* <h5>Component 2 DATA! <span class="badge badge-secondary">with <span class="badge badge-light">useContext()</span> and the first name is {fName} and last name is {lName}</span> </h5> */}
      <h5>
        Component 2 DATA!
        <span class='badge badge-secondary'>
          with <span class='badge badge-light'>useContext()</span> and the first
          name is {FirstName} and last name is {LastName}
        </span>
      </h5>
      <Component3 />
    </div>
  );
}

export default Component2;
