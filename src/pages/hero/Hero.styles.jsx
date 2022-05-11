import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
`;

export const SmallHeading = styled.h2`
  font-size: ${(props) => props.size || '15px'};
  color: ${(props) => props.color || '#08fdd8'};
`;

export const BigHeading = styled.h2`
  font-size: ${(props) => props.size || '35px'};
  color: ${(props) => props.color || 'white'};
`;
