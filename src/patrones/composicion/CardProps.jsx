import React from 'react';

const CardProps = ({ titulo, img, texto }) => {
  return (
    <div
      style={{
        width: '300px',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
      }}>
      <h3>{titulo}</h3>
      <img style={{ width: '90%' }} src={img} alt={titulo} />
      <p>{texto}</p>
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}>
        Comprar
      </button>
    </div>
  );
};

export default CardProps;
