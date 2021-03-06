import styled from 'styled-components';

export const Heading = styled.header`
  display: flex;
  background-color: rgba(29, 29, 29, 0.9);
  justify-content: space-between;
  backdrop-filter: blur(10px);
  position: fixed;
  padding: 10px 40px;
  height: 80px;
  width: 100%;
  z-index: 1;
  transform: ${(props) =>
    props.hide ? 'translatey(-80px)' : 'translatey(0px)'};
  transition: all 0.15s cubic-bezier(0.25, 0.5, 0.75, 1) 100ms;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

export const Logo = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100;
  color: #08fdd8;
  width: fit-content;

  h2 {
    font-size: 35px;
    color: white;
    margin-left: 10px;
  }
`;

export const MenuBtn = styled.div`
  display: none;
  position: relative;
  z-index: 10;
  float: right;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
  color: #08fdd8;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  display: flex;
  color: #08fdd8;
  align-items: center;
  margin-right: 15px;

  p {
    margin-right: 6px;
  }
`;
