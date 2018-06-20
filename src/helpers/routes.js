import Project from '../scenes/Project/Project';
import ProjectsContainer from '../scenes/Projects/ProjectsContainer';

const routes = [
  {
    title: 'Projects',
    path: '/',
    exact: true,
    component: ProjectsContainer,
  },
  {
    title: 'Project',
    path: '/project',
    exact: true,
    component: Project,
  }
];

export default routes;