import React, { useState } from 'react';
import { Heading, MenuBtn, Logo, NavItems, NavLink } from './header.styles';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { CgTerminal } from 'react-icons/cg';
import Menu from '../menu/Menu';
import { GlobalStyle } from '../menu/Menu.styles';

const Header = () => {
  const [activate, setActivate] = useState(false);

  const displayMenu = () => {
    setActivate((prevState) => !prevState);
  };

  const onFocusOut = (e) => {
    console.log(e);
    setActivate(false);
  };
  return (
    <>
      <Heading id='header'>
        <Logo>
          <CgTerminal size='45px' />
          <h2>TL</h2>
        </Logo>
        <div>
          <MenuBtn onClick={displayMenu}>
            {activate ? <BiX size='50px' /> : <BiMenuAltRight size='70px' />}
          </MenuBtn>
          <GlobalStyle activate={activate} />
          <Menu onFocusOut={onFocusOut} activate={activate} />
        </div>
        <NavItems>
          <NavLink>
            <p>01.</p>
            <a href='#about'>About Me</a>
          </NavLink>
          <NavLink>
            <p>02.</p>
            <a href='#skills'>Skills</a>
          </NavLink>
          <NavLink>
            <p>03.</p>
            <a href='#projects'>Projects</a>
          </NavLink>
          <NavLink>
            <p>04.</p>
            <a href='#contact'>Contact Me</a>
          </NavLink>
        </NavItems>
      </Heading>
    </>
  );
};

export default Header;
