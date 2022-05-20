import React from 'react';
import { ProjectContainer } from './Project.styles';

const Project = ({ name, url }) => {
  return (
    <ProjectContainer href={url}>
      <div>{name}</div>
    </ProjectContainer>
  );
};

export default Project;
