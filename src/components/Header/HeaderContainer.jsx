import { compose, pure, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';

import Header from './Header';

const enhance = compose(
  withRouter,
  withHandlers({
    goToProjects: ({ history }) => () => history.push('/')
  }),
  pure
);

export default enhance(Header);