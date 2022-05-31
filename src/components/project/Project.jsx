import React from 'react';
import {
  ProjectContainer,
  ProjectContent,
  ProjectImageContainer,
  ProjectImage,
} from './Project.styles';

const Project = ({ name, url, img, children }) => {
  return (
    <ProjectContainer href={url}>
      <ProjectContent> {name} </ProjectContent>
      <ProjectImageContainer>
        <ProjectImage src={img} />
      </ProjectImageContainer>
    </ProjectContainer>
  );
};

export default Project;
