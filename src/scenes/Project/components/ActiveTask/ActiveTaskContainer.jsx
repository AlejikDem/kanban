import { compose, pure } from 'recompose';
import { connect } from 'react-redux';

import { getActiveTask } from '../../../../helpers/selectors';
import { removeTask } from '../../../../ducks/tasks';

import ActiveTask from './ActiveTask';

const mapState = ({ tasks }, props) => ({
  activeTask: getActiveTask(tasks)
});

const mapActions = {
  removeTask
};

const enhance = compose(
  connect(mapState, mapActions),
  pure
);

export default enhance(ActiveTask);