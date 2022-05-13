import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const MenuContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  background-color: rgba(42, 42, 42, 1);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transform: ${(props) =>
    props.activate ? 'translatex(0vw)' : 'translatex(100vw)'};
  transition: all 0.25s cubic-bezier(0.25, 0.5, 0.75, 1);

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.activate ? 'hidden' : 'scroll')};
  }

  .content {
    filter: ${(props) => (props.activate ? 'blur(4px)' : 'blur(0px)')};

  @media (min-width: 768px) {
    filter: blur(0);
  }
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  display: flex;
  flex-direction: column;
  color: #08fdd8;
  font-size: 22px;
  align-items: center;
  margin-right: 15px;

  p {
    margin-right: 6px;
  }
`;
