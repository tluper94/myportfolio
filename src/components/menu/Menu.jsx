import React from 'react';
import { MenuContainer } from './Menu.styles';

const Menu = ({ activate }) => {
  return (
    <>
      <MenuContainer activate={activate}></MenuContainer>
    </>
  );
};

export default Menu;
