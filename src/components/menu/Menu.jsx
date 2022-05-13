import React from 'react';
import { MenuContainer, NavItems, NavLink } from './Menu.styles';

const Menu = ({ activate, setActivate }) => {
  const onClickHandler = () => {
    setActivate(false);
  };

  return (
    <>
      <MenuContainer activate={activate}>
        <NavItems>
          <NavLink>
            <p>01.</p>
            <a onClick={onClickHandler} href='#about'>
              About Me
            </a>
          </NavLink>
          <NavLink>
            <p>02.</p>
            <a onClick={onClickHandler} href='#skills'>
              Skills
            </a>
          </NavLink>
          <NavLink>
            <p>03.</p>
            <a onClick={onClickHandler} href='#projects'>
              Projects
            </a>
          </NavLink>
          <NavLink>
            <p>04.</p>
            <a onClick={onClickHandler} href='#contact'>
              Contact Me
            </a>
          </NavLink>
        </NavItems>
      </MenuContainer>
    </>
  );
};

export default Menu;
