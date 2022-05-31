import React from 'react';
import {
  ProjectContainer,
  ProjectContent,
  ProjectImage,
} from './Project.styles';

const Project = ({ name, url, children }) => {
  return (
    <ProjectContainer href={url}>
      <ProjectContent> {name} </ProjectContent>
      <ProjectImage src='' />
    </ProjectContainer>
  );
};

export default Project;
