import styled from 'styled-components';

export const ProjectContainer = styled.a`
  position: relative;
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  width: 15vw;
  height: 15vw;
  margin-bottom: 15px;
  background-color: green;
`;

export const ProjectContent = styled.div`
  grid-area: 1 1 -1 7;
`;

export const ProjectImage = styled.div``;
