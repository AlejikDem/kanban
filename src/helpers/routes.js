import Project from '../scenes/Project/Project';
import Projects from '../scenes/Projects/Projects';

const routes = [
  {
    title: 'Projects',
    path: '/',
    exact: true,
    component: Projects,
  },
  {
    title: 'Project',
    path: '/project',
    exact: true,
    component: Project,
  }
];

export default routes;