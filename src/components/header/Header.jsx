import { useEffect, useState } from 'react';
import { Heading, MenuBtn, Logo, NavItems, NavLink } from './header.styles';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { CgTerminal } from 'react-icons/cg';
import Menu from '../menu/Menu';
import { GlobalStyle } from '../menu/Menu.styles';
import { useScrollDirection } from '../../customHooks/useScrollDirection';

const Header = ({ focus, setFocus }) => {
  const [activate, setActivate] = useState(false);
  const [hideNavBar, setHideNavBar] = useState(false);

  const displayMenu = () => {
    setActivate((prevState) => !prevState);
    setFocus(false);
  };

  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === 'down' && !activate) {
      setHideNavBar(true);
    } else {
      setHideNavBar(false);
    }

    if (focus) {
      setActivate(false);
    }
  }, [scrollDirection, activate, focus]);

  return (
    <>
      <Heading hide={hideNavBar} id='header'>
        <a href='/'>
          <Logo>
            <CgTerminal size='45px' />
            <h2>TL</h2>
          </Logo>
        </a>
        <div>
          <MenuBtn onClick={displayMenu}>
            {activate ? <BiX size='50px' /> : <BiMenuAltRight size='70px' />}
          </MenuBtn>
          <Menu activate={activate} setActivate={setActivate} />
          <GlobalStyle activate={activate} />
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
