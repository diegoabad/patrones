import React, { useRef } from 'react';

// USEREF

const NoControlado = () => {
  const nombreRef = useRef(null);

  console.log('hola no controlado');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombreRef.current.value);
    if (nombreRef.current.value === '') {
      alert('El campo nombre no puede estar vacío');
      return;
    }
    nombreRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>No Controlado</h2>
      <input type="text" ref={nombreRef} />
      <button>Enviar</button>
    </form>
  );
};

export default NoControlado;
