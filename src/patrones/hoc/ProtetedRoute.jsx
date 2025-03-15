import React from 'react';

//HOC High Order Component
const withProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const isAuth = false;
    return isAuth ? (
      <WrappedComponent {...props} />
    ) : (
      <h1>Debes iniciar sesion</h1>
    );
  };
};

const ProtectedRoute1 = withProtectedRoute(() => <h1>Componente Protegido</h1>);

const ProtetedRoute2 = ({ children }) => {
  const isAuth = false;
  if (!isAuth) {
    return <h1>Debes iniciar sesion</h1>;
  }

  return children;
};

export default ProtetedRoute2;
