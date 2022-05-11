import styled from 'styled-components';

export const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 10px 40px;
  height: 80px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
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
  float: right;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
  color: #08fdd8;

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
