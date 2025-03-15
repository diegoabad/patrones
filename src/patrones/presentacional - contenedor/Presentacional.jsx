import React from 'react';

//*Solo se encarga de mostrar la información
//*No maneja estados
//*No tiene lógica de negocio

const Presentacional = ({ name, email, phone }) => {
  return (
    <div>
      <h2>username: {name}</h2>
      <h2>email: {email}</h2>
      <h2>phone: {phone}</h2>
    </div>
  );
};

export default Presentacional;
