import React, { createContext } from 'react';
import Component1 from './Component1';
// export const FirstName = createContext();
// export const LastName = createContext();
export const Person = createContext();
const PersonObject = { FirstName: 'Abhishek', LastName: 'Chaturvedi' };
function Context() {
  return (
    // <div>
    //   <div class='alert alert-secondary marginTop15' role='alert'>
    //     CONTEXT DEMO
    //   </div>
    //     <FirstName.Provider value='Abhishek'>
    //       <LastName.Provider value='Chaturvedi'>
    //       <p><h4>  <span class="badge badge-secondary">CONTEXT APP!</span></h4></p>
    //         <Component1 />
    //       </LastName.Provider>
    //     </FirstName.Provider>
    // </div>
    <div>
      <div class='alert alert-secondary marginTop15' role='alert'>
        CONTEXT DEMO
      </div>
      <Person.Provider value={PersonObject}>
        <p>
          <h4>
            <span class='badge badge-secondary'>CONTEXT APP!</span>
          </h4>
        </p>
        <Component1 />
      </Person.Provider>
    </div>
  );
}

export default Context;
