import React from 'react';
import { BigHeading, SmallHeading, HeroSection } from './Hero.styles';

const Hero = () => {
  return (
    <>
      <HeroSection>
        <SmallHeading>Hi, my name is</SmallHeading>
        <BigHeading>Trevor Luper</BigHeading>
        <BigHeading></BigHeading>
      </HeroSection>
    </>
  );
};

export default Hero;
