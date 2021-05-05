import React from 'react';

// Can write a logic to pass props according to the requirement
const getHOCProps = () => {
  const propFromHOC = 'propsFromHOC';
  return propFromHOC;
};

const HOC = (Component1) => {
  const Component2 = (props) => {
    return <Component1 propsFromHOC={getHOCProps()}  {...props} />;
  };
  return Component2;
};

export default HOC;
