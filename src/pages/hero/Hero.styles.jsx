import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  padding: 0 25px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1000px;
  min-height: 100vh;
`;

export const SmallHeading = styled.h2`
  margin: ${(props) => props.marginTop || '1px'};
  font-size: ${(props) => props.size || '15px'};
  color: ${(props) => props.color || '#08fdd8'};
`;

export const BigHeading = styled.h2`
  margin: ${(props) => props.marginTop || '1px'};
  font-size: ${(props) => props.size || '35px'};
  color: ${(props) => props.color || 'white'};

  @media (max-width: 768px) {
    font-size: 11vw;
  }
`;
