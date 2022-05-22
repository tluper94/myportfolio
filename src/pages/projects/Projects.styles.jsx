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

export const ProjectTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  width: 100%;
  &::after {
    content: '';
    display: block;
    position: relative;
    top: -5px;
    height: 1px;
    width: 200px;
    margin-left: 20px;
  }
`;

export const BigHeading = styled.h1`
  font-size: 5vw;
`;
