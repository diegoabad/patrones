import React from 'react';

const Layout = ({ children, estilos }) => {
  return <div style={{ ...estilos }}>{children}</div>;
};

export default Layout;
