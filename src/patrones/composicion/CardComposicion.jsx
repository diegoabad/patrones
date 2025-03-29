import React from 'react';

const CardComposicion = ({ children }) => {
  return (
    <div
      style={{
        width: '300px',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
      }}>
      {children}
    </div>
  );
};

export default CardComposicion;
