import { compose, pure } from 'recompose';
import { connect } from 'react-redux';

import Projects from './Projects';

const mapState = ({ projects }) => ({
  projects: projects.projects
});

const enhance = compose(
  connect(mapState),
  pure
);

export default enhance(Projects);
