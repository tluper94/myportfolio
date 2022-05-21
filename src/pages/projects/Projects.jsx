import React from 'react';
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectTitleContainer,
  BigHeading,
} from './Projects.styles';

import Project from '../../components/project/Project';

const projects = [
  { id: 1, name: 'project1', url: 'trevorluper.com' },
  { id: 2, name: 'project2', url: 'trevorluper.com' },
  { id: 3, name: 'project3', url: 'trevorluper.com' },
  { id: 4, name: 'project4', url: 'trevorluper.com' },
];

const Projects = () => {
  return (
    <ProjectsSection id='projects'>
      <ProjectTitleContainer>
        <BigHeading>My Featured Projects</BigHeading>
      </ProjectTitleContainer>
      <ProjectsContainer>
        {projects.map(({ name, url, id }) => (
          <Project key={id} name={name} url={url} />
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
