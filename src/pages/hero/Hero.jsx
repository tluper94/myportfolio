import React from 'react';
import { BigHeading, SmallHeading, HeroSection } from './Hero.styles';

const Hero = () => {
  return (
    <>
      <HeroSection id='hero'>
        <SmallHeading>Hi, my name is</SmallHeading>
        <BigHeading size='6vw'>Trevor Luper.</BigHeading>
        <BigHeading size='3vw'>I build things for the web.</BigHeading>
        <p style={{ color: 'white', maxWidth: '536px' }}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products
        </p>
      </HeroSection>
    </>
  );
};

export default Hero;
