import React, { useState } from 'react';

const Controlado = () => {
  const [nombre, setNombre] = useState('diego');
  const [email, setEmail] = useState('diego@diego.com');
  const [password, setPassword] = useState('123456');

  console.log('hola controlado');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nombre') {
      setNombre(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nombre,
      email,
      password,
    });

    setNombre('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlado</h2>
      <input type="text" name="nombre" onChange={handleChange} value={nombre} />

      <input type="email" name="email" onChange={handleChange} value={email} />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button>Enviar</button>
    </form>
  );
};

export default Controlado;
