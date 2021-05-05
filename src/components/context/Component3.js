import React from 'react';
import { FirstName, LastName } from './Context';

function Component3() {
  return (
    <div>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <LastName.Consumer>
              {(lName) => {
                return (
                  <>
                     
                    <h5>Component 3 DATA! <span class="badge badge-secondary">with with <span class="badge badge-light">Consumer</span> and the first name is
                    {fName} and last name is {lName}</span> </h5>
                  </>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
}

export default Component3;
