import React from 'react';
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectTitleContainer,
  BigHeading,
} from './Projects.styles';

import Project from '../../components/project/Project';

const projects = [
  { name: 'project1', url: 'trevorluper.com' },
  { name: 'project2', url: 'trevorluper.com' },
  { name: 'project3', url: 'trevorluper.com' },
  { name: 'project4', url: 'trevorluper.com' },
];

const Projects = () => {
  return (
    <ProjectsSection id='projects'>
      <ProjectTitleContainer>
        <BigHeading>My Featured Projects</BigHeading>
      </ProjectTitleContainer>
      <ProjectsContainer>
        {projects.map(({ name, url }) => (
          <Project name={name} url={url} />
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
