import styled from 'styled-components';

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  color: white;
`;

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  color: white;
`;

export const ProjectTitleContainer = styled.h2`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  white-space: nowrap;
  margin-bottom: 40px;
  &::before {
    position: relative;
    counter-increment: section 1;
    content: '0' counter(section) '.';
    margin-right: 10px;
    color: #08fdd8;
    font-size: clamp(26px, 5vw, var(15px));
  }
  &::after {
    content: '';
    display: block;
    position: relative;
    top: 0px;
    height: 1px;
    width: 200px;
    margin-left: 10px;
    background-color: #6b6b6b;
  }
`;

export const BigHeading = styled.h1`
  font-size: 4vw;
`;
