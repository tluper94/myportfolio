import React from 'react';
import { Heading, MenuBtn, Logo, NavItems, NavLink } from './header.styles';
import { BiMenuAltRight } from 'react-icons/bi';
import { CgTerminal } from 'react-icons/cg';

const Header = () => {
  return (
    <>
      <Heading>
        <Logo>
          <CgTerminal size='45px' />
          <h2>TL</h2>
        </Logo>
        <MenuBtn>
          <BiMenuAltRight size='50px' />
        </MenuBtn>
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
