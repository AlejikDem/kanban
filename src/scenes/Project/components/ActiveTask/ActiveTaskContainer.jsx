import { compose, pure } from 'recompose';
import { connect } from 'react-redux';

import { getActiveTask } from '../../../../helpers/selectors';

import ActiveTask from './ActiveTask';

const mapState = ({ tasks }, props) => ({
  activeTask: getActiveTask(tasks)
});

const enhance = compose(
  connect(mapState),
  pure
);

export default enhance(ActiveTask);