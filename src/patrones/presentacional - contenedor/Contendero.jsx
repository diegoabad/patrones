import React, { useEffect, useState } from 'react';
import Presentacional from './presentacional';

//*Se encarga de la logica de negocio
//*Maneja estados
//*obtener datos (fetch, axios, etc)

const Contendero = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({
      username: 'johndoe',
      email: 'johndoe@gmail.com',
      phone: '123456',
    });
  }, []);

  return (
    <Presentacional
      name={user.username}
      email={user.email}
      phone={user.phone}
    />
  );
};

export default Contendero;
