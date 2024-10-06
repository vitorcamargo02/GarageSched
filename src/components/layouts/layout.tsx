import React, { FC, ReactNode } from 'react';
import NavbarOficina from './navbarOficina'; // Certifique-se de que o caminho está correto

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavbarOficina /> {/* Carrega a navbar da oficina */}
      <main>{children}</main> {/* Todo o conteúdo da página será renderizado aqui */}
    </>
  );
};

export default Layout;
